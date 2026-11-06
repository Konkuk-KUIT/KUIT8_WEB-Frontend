
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import CartOrderHeader from "../../components/CartOrderHeader";
import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem";
import PaymentFooter from "../../components/PaymentFooter";
import PriceSummary from "../../components/PriceSummary";

import { getStore } from "../../api/stores";
import { createOrder } from "../../api/orders";
import { useCartStore } from "../../store/useCartStore";

interface OrderErrorResponse {
  code: string;
  message: string;
}

const Cart = () => {
  const navigate = useNavigate();

  // 1. Zustand 장바구니 상태
  const storeId = useCartStore((state) => state.storeId);
  const items = useCartStore((state) => state.items);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );
  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  // 2. 현재 장바구니 가게 정보 조회
  const { data: store } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => {
      if (storeId === null) {
        throw new Error("가게 ID가 없습니다.");
      }
      return getStore(storeId);
    },
    enabled: storeId !== null,
    retry: false,
  });

  // 3. 타이머 기능 
  const [remainingSeconds, setRemainingSeconds] = useState(60);

  const isExpired = remainingSeconds === 0;

  useEffect(() => {
    if (isExpired) return;

    const timerId = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [isExpired]);

  // 4. 장바구니 금액 계산
  const orderPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee =
    items.length > 0 && store ? store.deliveryFee : 0;

  const totalPrice = orderPrice + deliveryFee;

  const isBelowMinimum =
    !store || orderPrice < store.minDeliveryPrice;

  // 5. POST 주문 요청
  const { mutateAsync: submitOrder, isPending: isSubmitting } =
    useMutation({
      mutationFn: createOrder,
    });

  // 6. 결제 버튼 비활성화
  // 최소 주문금액 미달 조건은 제외!
  const isPaymentDisabled =
    items.length === 0 ||
    isExpired ||
    !store ||
    isSubmitting;

  // 7. 결제하기 클릭
  const handlePayment = async () => {
    if (
      storeId === null ||
      isPaymentDisabled
    ) {
      return;
    }

    try {
      const result = await submitOrder({
        storeId,
        items: items.map((item) => ({
          menuId: item.id,
          quantity: item.quantity,
        })),
      });

      window.alert(
        `주문이 접수되었습니다!\n` +
        `주문 상태: ${result.status}\n` +
        `결제금액: ${result.totalPrice.toLocaleString()}원`
      );
    } catch (error) {
      if (isAxiosError<OrderErrorResponse>(error)) {
        const status = error.response?.status;
        const errorCode = error.response?.data?.code;
        const message = error.response?.data?.message;

        if (
          status === 400 &&
          errorCode === "MINIMUM_ORDER_NOT_MET"
        ) {
          window.alert(message ?? "최소 주문금액 미달");
          return;
        }

        window.alert(
          message ?? "주문 요청에 실패했습니다."
        );
      } else {
        window.alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  // 8. 타이머 출력 형식
  const minutes = String(
    Math.floor(remainingSeconds / 60)
  ).padStart(2, "0");

  const seconds = String(
    remainingSeconds % 60
  ).padStart(2, "0");

  const formattedTime = `${minutes}:${seconds}`;

  // 9. 주문 취소
  const handleOrderCancel = () => {
    clearCart();
    navigate("/store", { replace: true });
  };

  // 10. 더 담기
  const handleAddMore = () => {
    if (!store) return;
    navigate(`/store/${store.id}`);
  };

  return (
    <main className="mt-[41px] w-[390px] bg-white pb-[150px]">
      <BackBar
        orderCancel={true}
        onOrderCancel={handleOrderCancel}
      />

      <div className="h-[3px]" />
      <div className="h-[16px] bg-[#f2f4f6]" />

      <section>
        <CartOrderHeader
          storeName={store?.name ?? "장바구니"}
          formattedTime={formattedTime}
          isExpired={isExpired}
          isBelowMinimum={isBelowMinimum}
          hasItems={items.length > 0}
        />

        {items.length === 0 ? (
          <p className="px-[24px] py-[40px] text-center text-[15px] text-[#6b7684]">
            장바구니에 담긴 메뉴가 없습니다.
          </p>
        ) : (
          items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={() => increaseQuantity(item.id)}
              onDecrease={() => decreaseQuantity(item.id)}
            />
          ))
        )}

        <button
          type="button"
          onClick={handleAddMore}
          disabled={!store}
          className="flex w-full cursor-pointer items-center justify-center gap-[3px] border-t border-[#e5e8eb] pt-[18px] pb-[20px] text-[17px] font-semibold text-[#3182f6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>더 담기</span>
          <span className="p-[2px]">
            <img src="/plus.svg" alt="" />
          </span>
        </button>
      </section>

      <div className="h-[16px] bg-[#f2f4f6]" />

      <PriceSummary
        orderPrice={orderPrice}
        deliveryFee={deliveryFee}
        totalPrice={totalPrice}
      />

      <PaymentFooter
        minOrderPrice={store?.minDeliveryPrice ?? 0}
        totalPrice={totalPrice}
        disabled={isPaymentDisabled}
        isSubmitting={isSubmitting}
        onPayment={() => void handlePayment()}
      />
    </main>
  );
};

export default Cart;
