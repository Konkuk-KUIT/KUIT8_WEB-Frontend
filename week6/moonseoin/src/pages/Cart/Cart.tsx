import { useEffect, useRef, useState } from "react";
import axios from "axios";
import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import stores from "../../models/stores";

import useCartStore from "../../stores/useCartStore";

const Cart = () => {
  const { storeId, menus, changeQuantity } = useCartStore();
  const store = stores.find((store) => store.id === storeId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitting = useRef(false);
  const [endTime] = useState(() => {
    const savedTime = sessionStorage.getItem("requirement3");
    const time = Number(savedTime);
    return savedTime && Number.isFinite(time) && time > 0 ? time : Date.now() + 60000;
  });
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, Math.ceil((endTime - Date.now()) / 1000))
  );

  useEffect(() => {
    sessionStorage.setItem("requirement3", String(endTime));
    const timer = window.setInterval(() => {
      const time = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setTimeLeft(time);
      if (time === 0) window.clearInterval(timer);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [endTime]);

  const isExpired = timeLeft === 0;
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const totalOrder = menus.reduce((total, menu) => total + menu.price * menu.quantity, 0);
  const deliveryFee = store?.deliveryFee ?? 0;
  const minDeliveryPrice = store?.minDeliveryPrice ?? 0;
  const finalPrice = totalOrder + deliveryFee;
  const isBelowMin = totalOrder < minDeliveryPrice;

  const handleOrder = async () => {
    if (submitting.current || storeId === null || menus.length === 0 || Date.now() >= endTime) return;

    submitting.current = true;
    setIsSubmitting(true);
    try {
      const { data } = await axios.post<{ status: string; totalPrice: number }>(
        `${import.meta.env.VITE_API_BASE_URL}/api/orders`,
        {
          storeId,
          items: menus.map((menu) => ({ menuId: menu.id, quantity: menu.quantity })),
        }
      );
      alert(`${data.status === "RECEIVED" ? "주문이 접수되었습니다." : "주문이 접수되지 않았습니다."}\n결제 금액: ${data.totalPrice.toLocaleString()}원`);
    } catch (error) {
      const message = axios.isAxiosError<{ code: string; message: string }>(error)
        ? error.response?.data.message
        : undefined;
      alert(message ?? "주문 요청에 실패했습니다. 다시 시도해주세요.");
    } finally {
      submitting.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <main className="mt-[41px] w-[390px] pb-[180px]">
      <BackBar orderCancel />
      <div className="h-4 bg-[#F2F4F6]" />
      <div className="px-5 py-3 text-[15px] text-[#F04452]">
        {isExpired ? "주문 시간이 만료되었습니다." : `남은 주문 시간 ${minutes}:${seconds}`}
      </div>

      <div className="px-5 py-4 bg-white flex justify-between text-sm">
        <span className="font-semibold text-[17px] text-[#6B7684]">{store?.name ?? "장바구니가 비어 있습니다."}</span>
        {isBelowMin && (
          <div className="flex items-center gap-1 text-[#F04452]">
            <span className="text-[15px]">최소금액 미달</span>
            <img src="/warning.svg" className="w-3 h-3" />
          </div>
        )}
      </div>

      {menus.map((menu) => (
        <CartItem
          key={menu.id}
          onIncrease={() => changeQuantity(menu.id, 1)}
          onDecrease={() => changeQuantity(menu.id, -1)}
          item={{
            id: menu.id,
            name: menu.name,
            extra: menu.ingredients,
            quantity: menu.quantity,
            price: menu.price * menu.quantity,
          }}
        />
      ))}

      <div className="px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]">더 담기 +</div>

      <CartSummary totalOrder={totalOrder} deliveryFee={deliveryFee} finalPrice={finalPrice} minDeliveryPrice={minDeliveryPrice} isExpired={isExpired} isEmpty={menus.length === 0} isSubmitting={isSubmitting} onOrder={handleOrder} />
    </main>
  );
};

export default Cart;
