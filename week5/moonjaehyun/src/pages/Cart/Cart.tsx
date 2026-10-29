import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar";
import CartCheckoutBar from "../../components/CartCheckoutBar";
import CartStoreSection from "../../components/CartStoreSection";
import OrderSummary from "../../components/OrderSummary";
import { useCartStore } from "../../stores/useCartStore";

const DEADLINE_STORAGE_KEY = "cart-order-deadline";
const ORDER_DURATION_MS = 60_000;

const Cart = () => {
  const navigate = useNavigate();

  const cartStore = useCartStore();
  const store = cartStore.store;
  const menus = cartStore.menus;

  const [deadline, setDeadline] = useState(() => {
    const saved = sessionStorage.getItem(DEADLINE_STORAGE_KEY);
    const value = Number(saved);
    return saved && Number.isFinite(value) && value > 0
      ? value
      : Date.now() + ORDER_DURATION_MS;
  });
  const [now, setNow] = useState(() => Date.now());
  const remainingSeconds = Math.max(0, Math.ceil((deadline - now) / 1000));
  const isExpired = remainingSeconds === 0;

  const handleRestartOrder = () => {
    const startedAt = Date.now();
    setNow(startedAt);
    setDeadline(startedAt + ORDER_DURATION_MS);
  };

  // 만료 시각을 저장해 새로고침과 탭 전환에도 남은 시간을 유지합니다.
  useEffect(() => {
    sessionStorage.setItem(DEADLINE_STORAGE_KEY, String(deadline));

    const updateClock = () => {
      const currentTime = Date.now();
      setNow(currentTime);
      if (currentTime >= deadline) {
        window.clearInterval(timerId);
      }
    };
    const timerId = window.setInterval(updateClock, 250);
    window.addEventListener("focus", updateClock);
    document.addEventListener("visibilitychange", updateClock);

    return () => {
      window.clearInterval(timerId);
      window.removeEventListener("focus", updateClock);
      document.removeEventListener("visibilitychange", updateClock);
    };
  }, [deadline]);

  if (!store) {
    return (
      <main className="mx-auto w-[390px] pt-[41px]">
        <BackBar orderCancel={false} />
        <section className="px-[24px] py-[60px] text-center">
          <h1 className="text-[20px] font-semibold text-[#333d4b]">
            장바구니가 비어 있습니다
          </h1>
          <button
            onClick={() => navigate("/store")}
            className="mt-[24px] rounded-[8px] bg-[#3182f6] px-[20px] py-[12px] text-white"
          >
            가게 목록으로 이동
          </button>
        </section>
      </main>
    );
  }

  const orderPrice = menus.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // 총 금액
  const totalPrice = orderPrice + store.deliveryFee;

  // 최소 금액 이하인 거 판정
  const isBelowMinimum = orderPrice < store.minDeliveryPrice;
  const isCheckoutDisabled = isBelowMinimum || isExpired || menus.length === 0;

  return (
    <main className="mx-auto min-h-screen w-[390px] bg-white pt-[41px] pb-[95px]">
      <BackBar orderCancel={true} />
      <section className="px-[24px] py-[16px]" aria-label="주문 제한 시간">
        {isExpired ? (
          <>
            <p role="alert" className="text-[15px] text-[#f04452]">
              주문 시간이 만료되었습니다. 다시 주문을 시작해 주세요.
            </p>
            <button
              type="button"
              onClick={handleRestartOrder}
              className="mt-[8px] cursor-pointer text-[15px] text-[#3182f6]"
            >
              다시 주문 시작
            </button>
          </>
        ) : (
          <p className="text-[15px] text-[#6b7684]">
            남은 주문 시간 {Math.floor(remainingSeconds / 60)}:
            {String(remainingSeconds % 60).padStart(2, "0")}
          </p>
        )}
      </section>
      <div className="h-[16px] w-[390px] bg-[#f2f4f6]" />

      <CartStoreSection
        storeName={store.name}
        items={menus}
        isBelowMinimum={isBelowMinimum}
        onAddMore={() => navigate(`/store/${store.id}`)}
        onAddMenu={(menu) => cartStore.addMenu(store, menu)}
        onSubMenu={(menu) => cartStore.subMenu(menu)}
      />

      <div className="h-[16px] w-[390px] bg-[#f2f4f6]" />
      <div className="h-[16px] w-[390px] bg-white" />

      <OrderSummary
        orderPrice={orderPrice}
        deliveryFee={store.deliveryFee}
        totalPrice={totalPrice}
      />

      <CartCheckoutBar
        minimumOrderPrice={store.minDeliveryPrice}
        totalPrice={totalPrice}
        disabled={isCheckoutDisabled}
      />
    </main>
  );
};

export default Cart;
