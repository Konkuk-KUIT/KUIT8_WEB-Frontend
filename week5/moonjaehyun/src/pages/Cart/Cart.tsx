import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar";
import CartCheckoutBar from "../../components/CartCheckoutBar";
import CartStoreSection from "../../components/CartStoreSection";
import OrderSummary from "../../components/OrderSummary";
import stores from "../../models/stores";
import type { StoredMenus } from "../Store/Store";

const CART_STORAGE_KEY = "contain-store-ids";
const DEADLINE_STORAGE_KEY = "cart-order-deadline";
const ORDER_DURATION_MS = 60_000;

const Cart = () => {
  const store = stores[0];
  const navigate = useNavigate();

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

  const [cartStoredMenus, setCartStoredMenus] = useState<StoredMenus[]>(() => {
    const savedCartStoredMenuIds = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCartStoredMenuIds) {
      return [];
    }

    return JSON.parse(savedCartStoredMenuIds) as StoredMenus[];
  });

  const handleQuantityChange = (id: number, delta: 1 | -1) => {
    setCartStoredMenus((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

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

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartStoredMenus));
  }, [cartStoredMenus]);

  // id 기반으로 메뉴 찾고 quantity만 교체
  const cartItems = cartStoredMenus.flatMap((item) => {
    const menu = store.menus?.find((menu) => menu.id === item.id);

    if (!menu) {
      return [];
    }

    return [
      {
        id: menu.id,
        name: menu.name,
        price: menu.price,
        options: menu.ingredients,
        quantity: item.quantity,
      },
    ];
  });

  // 나머지 넣기
  const orderPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // 총 금액
  const totalPrice = orderPrice + store.deliveryFee;

  // 최소 금액 이하인 거 판정
  const isBelowMinimum = orderPrice < store.minDeliveryPrice;
  const isCheckoutDisabled =
    isBelowMinimum || isExpired || cartItems.length === 0;

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
        items={cartItems}
        isBelowMinimum={isBelowMinimum}
        onQuantityChange={handleQuantityChange}
        onAddMore={() => navigate(`/store/${store.id}`)}
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
