import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CartOrderHeader from "../../components/CartOrderHeader";
import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem";
import PaymentFooter from "../../components/PaymentFooter";
import PriceSummary from "../../components/PriceSummary";

import stores from "../../models/stores";
import { useCartStore } from "../../store/useCartStore";

const Cart = () => {
  const navigate = useNavigate();

  // 1. Zustand에서 장바구니 상태 가져오기
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

  // 2. 장바구니에 담긴 가게 찾기
  const store = stores.find(
    (item) => item.id === storeId
  );

  // 3. 기존 4주차 타이머는 그대로
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

  // 5. 결제 가능 여부
  const isBelowMinimum =
    !store || orderPrice < store.minDeliveryPrice;

  const isPaymentDisabled =
    items.length === 0 || isBelowMinimum || isExpired;

  // 6. 타이머 출력 형식
  const minutes = String(
    Math.floor(remainingSeconds / 60)
  ).padStart(2, "0");

  const seconds = String(
    remainingSeconds % 60
  ).padStart(2, "0");

  const formattedTime = `${minutes}:${seconds}`;

  // 7. 주문 취소
  const handleOrderCancel = () => {
    clearCart();
    navigate("/store", { replace: true });
  };

  // 8. 더 담기: 현재 가게의 상세 페이지로 이동
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

      {/* 가게 및 장바구니 영역 */}
      <section>
        <CartOrderHeader
          storeName={store?.name ?? "장바구니"}
          formattedTime={formattedTime}
          isExpired={isExpired}
          isBelowMinimum={isBelowMinimum}
          hasItems={items.length > 0}
        />

        {/* 장바구니 메뉴 목록 */}
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

        {/* 더 담기 */}
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

      {/* 가격 요약 */}
      <PriceSummary
        orderPrice={orderPrice}
        deliveryFee={deliveryFee}
        totalPrice={totalPrice}
      />

      {/* 결제 영역 */}
      <PaymentFooter
        minOrderPrice={store?.minDeliveryPrice ?? 0}
        totalPrice={totalPrice}
        disabled={isPaymentDisabled}
      />
    </main>
  );
};

export default Cart;
