import { useIsMutating, useMutation, useQueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { postOrders } from "../../api/cart";
import BackBar from "../../components/BackBar";
import CartCheckoutBar from "../../components/CartCheckoutBar";
import CartStoreSection from "../../components/CartStoreSection";
import OrderSummary from "../../components/OrderSummary";
import { useCartStore } from "../../stores/useCartStore";

const DEADLINE_STORAGE_KEY = "cart-order-deadline";
const ORDER_DURATION_MS = 60_000;
const ORDER_MUTATION_KEY = ["order"];

const Cart = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const orderMutationFilter = { mutationKey: ORDER_MUTATION_KEY, exact: true };
  const isSubmitting = useIsMutating(orderMutationFilter) > 0;

  const cartStore = useCartStore();
  const store = cartStore.store;
  const menus = cartStore.menus;

  const { mutate: submitOrder } = useMutation({
    mutationKey: ORDER_MUTATION_KEY,
    mutationFn: postOrders,
    retry: false,
    onSuccess: (order) => {
      window.alert(
        `주문 접수 상태: ${order.status}\n결제 금액: ${order.totalPrice.toLocaleString("ko-KR")}원`,
      );
    },
    onError: (error) => {
      if (isAxiosError<{ code?: string; message?: string }>(error)) {
        const response = error.response;
        if (
          response?.status === 400 &&
          response.data?.code === "MINIMUM_ORDER_NOT_MET" &&
          response.data.message
        ) {
          window.alert(response.data.message);
          return;
        }
      }

      window.alert("주문을 접수하지 못했습니다. 다시 시도해 주세요.");
    },
  });

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

  // 최소 금액 이하인 거 판정
  const isBelowMinimum = orderPrice < store.minDeliveryPrice;
  const isCheckoutDisabled = isSubmitting || isExpired || menus.length === 0;

  const handleCheckout = () => {
    if (
      menus.length === 0 ||
      Date.now() >= deadline ||
      queryClient.isMutating(orderMutationFilter) > 0
    ) {
      return;
    }

    submitOrder({
      storeId: store.id,
      items: menus.map(({ id, quantity }) => ({ menuId: id, quantity })),
    });
  };

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

      <OrderSummary orderPrice={orderPrice} deliveryFee={store.deliveryFee} />

      <CartCheckoutBar
        minimumOrderPrice={store.minDeliveryPrice}
        disabled={isCheckoutDisabled}
        onCheckout={handleCheckout}
      />
    </main>
  );
};

export default Cart;
