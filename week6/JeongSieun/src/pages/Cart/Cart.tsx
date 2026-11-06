
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import { useCartStore } from "../../stores/useCartStore";
import { getStoreById } from "../../api/stores";
import { createOrder } from "../../api/orders";
import type { OrderRequest } from "../../api/orders";

// 서버 오류 응답 타입
interface OrderErrorResponse {
  code?: string;
  message?: string;
  error?: {
    code?: string;
    message?: string;
  };
}

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

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  // 기존 1분 타이머
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    if (remainingTime === 0) return;

    const timer = window.setTimeout(() => {
      setRemainingTime((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [remainingTime]);

  // 서버에서 현재 장바구니 가게 정보 가져오기
  const {
    data: store,
    isPending: isStorePending,
    isError: isStoreError,
    refetch,
  } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => {
      if (storeId === null) {
        throw new Error("가게 ID가 없습니다.");
      }

      return getStoreById(storeId);
    },
    enabled: storeId !== null,
    retry: false,
  });

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

  // 최소 주문금액 미달 여부
  const isMinimumOrder =
    store ? orderPrice < store.minDeliveryPrice : false;

  // 타이머 만료 여부
  const isExpired = remainingTime === 0;

  // 주문 API 연결 (Mutation)
  const orderMutation = useMutation({
    mutationFn: createOrder,

    // 주문 성공
    onSuccess: (result) => {
      const orderResult =
        result.data ?? result.order ?? result;

      const serverTotalPrice =
        orderResult.totalPrice ??
        orderResult.totalAmount ??
        orderResult.paymentAmount;

      if (serverTotalPrice !== undefined) {
        window.alert(
          `주문이 접수되었습니다!\n총 결제금액: ${serverTotalPrice.toLocaleString()}원`
        );
      } else {
        window.alert(
          "주문 요청이 성공했지만 서버 응답에서 결제금액을 확인하지 못했습니다."
        );
      }

      clearCart();
    },

    // 주문 실패
    onError: (error: Error) => {
      if (isAxiosError<OrderErrorResponse>(error)) {
        const status = error.response?.status;
        const responseData = error.response?.data;

        const errorCode =
          responseData?.code ??
          responseData?.error?.code;

        const errorMessage =
          responseData?.message ??
          responseData?.error?.message;

        // 최소 주문금액 미달 오류
        if (
          status === 400 &&
          errorCode === "MINIMUM_ORDER_NOT_MET"
        ) {
          window.alert(
            errorMessage ?? "최소 주문금액을 확인해주세요."
          );
          return;
        }

        window.alert(
          errorMessage ??
          `주문에 실패했습니다. (${status ?? "네트워크 오류"})`
        );
        return;
      }

      window.alert("주문 중 오류가 발생했습니다.");
    },
  });

  // 결제 버튼 비활성화 조건
  const isPaymentDisabled =
    items.length === 0 ||
    !store ||
    isExpired ||
    orderMutation.isPending;

  // 타이머 표시
  const formattedTime =
    `${String(Math.floor(remainingTime / 60)).padStart(2, "0")}:` +
    `${String(remainingTime % 60).padStart(2, "0")}`;

  // 더 담기
  const handleAddMore = () => {
    if (storeId !== null && store) {
      navigate(`/store/${storeId}`);
    }
  };

  // 결제하기
  const handlePayment = () => {
    if (
      isPaymentDisabled ||
      storeId === null ||
      !store
    ) {
      return;
    }

    // 서버에 보낼 주문 데이터
    const orderData: OrderRequest = {
      storeId,
      items: items.map((item) => ({
        menuId: item.menu.id,
        quantity: item.quantity,
      })),
    };

    orderMutation.mutate(orderData);
  };

  return (
    <main className="relative min-h-[844px] w-[390px] bg-white pb-[150px]">
      <BackBar orderCancel={true} />

      <div className="flex flex-col pt-[41px]">
        {/* 위쪽 구분선 */}
        <div className="h-[16px] w-full bg-[#f2f4f6]" />

        {/* 장바구니 목록 */}
        <section className="flex flex-col">
          {items.length > 0 &&
          storeId !== null &&
          isStorePending ? (
            <div className="flex min-h-[200px] items-center justify-center">
              <p className="text-[15px] text-[#6b7684]">
                가게 정보를 불러오는 중입니다.
              </p>
            </div>
          ) : items.length > 0 && isStoreError ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center gap-3">
              <p className="text-[15px] text-[#6b7684]">
                가게 정보를 불러오지 못했습니다.
              </p>
              <button
                type="button"
                onClick={() => void refetch()}
                className="rounded-lg bg-[#3182f6] px-4 py-2 text-white"
              >
                다시 시도
              </button>
            </div>
          ) : store && items.length > 0 ? (
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

              {/* 장바구니 메뉴 목록 */}
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
          type="button"
          onClick={handlePayment}
          disabled={isPaymentDisabled}
          className="absolute left-[20px] top-[39px] h-[56px] w-[350px] rounded-[16px] p-0 text-[16px]"
        >
          {orderMutation.isPending
            ? "주문 처리 중..."
            : `${totalPrice.toLocaleString()}원 결제하기`}
        </Button>
      </div>
    </main>
  );
};

export default Cart;
