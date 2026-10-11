
import { useEffect, useState } from "react";

import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem";
import PaymentFooter from "../../components/PaymentFooter";
import PriceSummary from "../../components/PriceSummary";
import stores from "../../models/stores";

import type { CartMenu } from "../../types/stores";

const Cart = () => {
  const store = stores[0];
  const menu = store?.menus?.[0];

  // 1. 수량과 주문 제한 시간 상태
  const [quantity, setQuantity] = useState(1);
  const [remainingSeconds, setRemainingSeconds] = useState(60);

  const isExpired = remainingSeconds === 0;

  // 2. 1분 카운트다운
  useEffect(() => {
    if (isExpired) return;

    const timerId = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    // 화면 이탈 또는 시간 만료 시 타이머 정리
    return () => window.clearInterval(timerId);
  }, [isExpired]);

  // Hook 호출 이후 데이터 존재 여부 검사
  // 이거 아래로는 이제 메뉴 있다는 뜻이니까 안전하게 사용 가능 
  // (위에서 menus?.[0] 한거 때문에)
  if (!store || !menu) {
    return <p>메뉴 정보가 없습니다.</p>;
  }

  // 3. 수량 변경 이벤트
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // 4. 장바구니 데이터
  const cartItem: CartMenu = {
    ...menu,
    options: "추천소스, 채소볼, 베이컨추가, 시저드레싱 추가",
    quantity,
  };

  // 5. 수량에 따른 금액 계산
  const orderPrice = menu.price * quantity;
  const deliveryFee = store.deliveryFee;
  const totalPrice = orderPrice + deliveryFee;

  // 6. 결제 가능 여부 판단
  const isBelowMinimum = orderPrice < store.minDeliveryPrice;
  const isPaymentDisabled = isBelowMinimum || isExpired;

  // 7. 남은 초를 MM:SS 형태로 변환
  const minutes = String(
    Math.floor(remainingSeconds / 60)
  ).padStart(2, "0");

  const seconds = String(
    remainingSeconds % 60
  ).padStart(2, "0");

  const formattedTime = `${minutes}:${seconds}`;

  return (
    <main className="mt-[41px] w-[390px] bg-white">
      {/* 상단바 */}
      <BackBar orderCancel={true} />

      <div className="h-[3px]" />
      <div className="h-[16px] bg-[#f2f4f6]" />

      {/* 가게 및 장바구니 영역 */}
      <section>
        {/* 가게 이름 + 타이머 + 주문 상태 */}
        <div className="flex min-h-[70px] items-start justify-between gap-[8px] px-[24px] pt-[20px] pb-[12px]">
          <div className="flex items-center gap-[8px]">
            <span className="whitespace-nowrap text-[17px] font-semibold text-[#6b7684]">
              {store.name}
            </span>

            <span
              aria-label="남은 주문 시간"
              className={`whitespace-nowrap text-[14px] font-semibold ${
                isExpired
                  ? "text-[#f04452]"
                  : "text-[#3182f6]"
              }`}
            >
              {formattedTime}
            </span>
          </div>

          {/* 주문 상태 안내 */}
          {isExpired ? (
            <span
              role="status"
              className="text-[14px] font-medium text-[#f04452]"
            >
              주문시간 만료
            </span>
          ) : isBelowMinimum ? (
            <div className="flex shrink-0 items-center gap-[6px]">
              <span className="text-[14px] font-medium text-[#f04452]">
                최소금액 미달
              </span>
              <img
                src="/alert-circle.svg"
                alt=""
                className="h-[16px] w-[16px]"
              />
            </div>
          ) : null}
        </div>

        {/* 장바구니 상품 */}
        <CartItem
          item={cartItem}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />

        {/* 더 담기 - 기존 UI 유지 */}
        <button
          type="button"
          className="flex w-full cursor-pointer items-center justify-center gap-[3px] border-t border-[#e5e8eb] pt-[18px] pb-[20px] text-[17px] font-semibold text-[#3182f6]"
        >
          <span>더 담기</span>
          <span className="p-[2px]">
            <img src="/plus.svg" alt="" />
          </span>
        </button>
      </section>

      {/* 두 번째 회색 구분 영역 */}
      <div className="h-[16px] bg-[#f2f4f6]" />

      {/* 가격 요약 */}
      <PriceSummary
        orderPrice={orderPrice}
        deliveryFee={deliveryFee}
        totalPrice={totalPrice}
      />

      {/* 결제 영역 */}
      <PaymentFooter
        minOrderPrice={store.minDeliveryPrice}
        totalPrice={totalPrice}
        disabled={isPaymentDisabled}
      />
    </main>
  );
};

export default Cart;

