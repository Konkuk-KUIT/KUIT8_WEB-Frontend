
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import stores from "../../models/stores";
import { useCartStore } from "../../stores/useCartStore";

const Cart = () => {
  const navigate = useNavigate();

  // Zustand 장바구니 상태
  const storeId = useCartStore((state) => state.storeId);
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );
  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  // 기존 타이머
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    if (remainingTime === 0) return;

    const timer = window.setTimeout(() => {
      setRemainingTime((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [remainingTime]);

  // 현재 장바구니의 가게
  const store = stores.find((item) => item.id === storeId);

  // 메뉴 합계
  const orderPrice = items.reduce(
    (sum, item) => sum + item.menu.price * item.quantity,
    0
  );

  // 배달비
  const deliveryFee =
    items.length > 0 ? (store?.deliveryFee ?? 0) : 0;

  // 총 결제금액
  const totalPrice = orderPrice + deliveryFee;

  // 최소 주문금액 확인
  const isMinimumOrder =
    store ? orderPrice < store.minDeliveryPrice : true;

  const isExpired = remainingTime === 0;

  const isPaymentDisabled =
    items.length === 0 ||
    !store ||
    isMinimumOrder;

  const formattedTime =
    `${String(Math.floor(remainingTime / 60)).padStart(2, "0")}:` +
    `${String(remainingTime % 60).padStart(2, "0")}`;

  // 더 담기
  const handleAddMore = () => {
    if (storeId !== null && store) {
      navigate(`/store/${storeId}`);
    }
  };

  return (
    <main className="relative min-h-[844px] w-[390px] bg-white pb-[150px]">
      <BackBar orderCancel={true} />

      <div className="flex flex-col pt-[41px]">
        {/* 위쪽 구분선 */}
        <div className="h-[16px] w-full bg-[#f2f4f6]" />

        {/* 장바구니 목록 */}
        <section className="flex flex-col">
          {store && items.length > 0 ? (
            <>
              {/* 가게 이름 및 주문 시간 */}
              <div className="flex items-center justify-between px-[24px] pt-[26px] pb-[12px]">
                <h1 className="text-[17px] font-bold text-[#6b7684]">
                  {store.name}
                </h1>

                <span
                  className={`text-[15px] ${
                    isExpired
                      ? "text-[#f04452]"
                      : "text-[#6b7684]"
                  }`}
                >
                  {isExpired ? "시간 만료" : formattedTime}
                </span>
              </div>

              {/* 최소 주문금액 미달 안내 */}
              {isMinimumOrder && !isExpired && (
                <div className="px-[24px] pb-[8px] text-right text-[15px] font-medium text-[#f04452]">
                  최소금액 미달
                </div>
              )}

              {/* 실제 장바구니 메뉴 목록 */}
              {items.map((item) => (
                <CartItem
                  key={item.menu.id}
                  menu={item.menu}
                  quantity={item.quantity}
                  onIncrease={() =>
                    increaseQuantity(item.menu.id)
                  }
                  onDecrease={() =>
                    decreaseQuantity(item.menu.id)
                  }
                />
              ))}
            </>
          ) : (
            <div className="flex min-h-[200px] flex-col items-center justify-center gap-[12px]">
              <p className="text-[17px] text-[#6b7684]">
                장바구니가 비어 있습니다.
              </p>

              <button
                type="button"
                onClick={() => navigate("/store")}
                className="text-[15px] font-semibold text-[#3182f6]"
              >
                가게 목록으로 이동
              </button>
            </div>
          )}
        </section>

        {/* 더 담기 */}
        {store && items.length > 0 && (
          <button
            type="button"
            onClick={handleAddMore}
            className="flex h-[59px] w-full items-center justify-center border-t border-[#e5e8eb] text-[17px] font-semibold text-[#3182f6]"
          >
            더 담기 ＋
          </button>
        )}

        {/* 아래쪽 구분선 */}
        <div className="h-[16px] w-full bg-[#f2f4f6]" />

        {/* 주문금액 영역 */}
        <section className="mt-[24px] flex flex-col">
          <div className="flex h-[38px] items-center justify-between px-[24px]">
            <span className="text-[17px] text-[#8b95a1]">
              주문금액
            </span>
            <span className="text-[17px] text-[#505967]">
              {orderPrice.toLocaleString()}원
            </span>
          </div>

          <div className="flex h-[38px] items-center justify-between px-[24px]">
            <span className="text-[17px] text-[#8b95a1]">
              배달요금
            </span>
            <span className="text-[17px] text-[#505967]">
              {deliveryFee.toLocaleString()}원
            </span>
          </div>

          <div className="flex h-[54px] items-center justify-between px-[24px]">
            <span className="text-[17px] font-medium text-[#4e5968]">
              총 결제금액
            </span>
            <span className="text-[17px] font-semibold text-[#4e5968]">
              {totalPrice.toLocaleString()}원
            </span>
          </div>
        </section>
      </div>

      {/* 하단 결제 영역 */}
      <div className="fixed bottom-0 z-30 h-[129px] w-[390px] bg-white">
        <div className="text-center text-[17px] text-[#6b7684]">
          {store
            ? isMinimumOrder
              ? `${store.minDeliveryPrice.toLocaleString()}원 이상 주문해주세요.`
              : `최소 주문금액 ${store.minDeliveryPrice.toLocaleString()}원`
            : "장바구니에 메뉴를 담아주세요."}
        </div>

        <Button
          disabled={isPaymentDisabled}
          className="absolute left-[20px] top-[39px] h-[56px] w-[350px] rounded-[16px] p-0 text-[16px]"
        >
          {totalPrice.toLocaleString()}원 결제하기
        </Button>
      </div>
    </main>
  );
};

export default Cart;
