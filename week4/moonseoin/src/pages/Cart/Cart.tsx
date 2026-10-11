import { useEffect, useState } from "react";
import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import stores from "../../models/stores";

const Cart = () => {
  const store = stores[0];
  const [menus, setMenus] = useState(() =>
    store.menus!.slice(0, 1).map((menu) => ({ ...menu, quantity: 1 }))
  );
  const [endTime] = useState(() => {
    const savedTime = localStorage.getItem("requirement3");
    const time = Number(savedTime);
    return savedTime && Number.isFinite(time) && time > 0 ? time : Date.now() + 60000;
  });
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, Math.ceil((endTime - Date.now()) / 1000))
  );

  useEffect(() => {
    localStorage.setItem("requirement3", String(endTime));
    const timer = window.setInterval(() => {
      const time = Math.max(0, Math.ceil((endTime - Date.now()) / 1000));
      setTimeLeft(time);
      if (time === 0) window.clearInterval(timer);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [endTime]);

  const handleQuantity = (id: number, change: number) => {
    setMenus((currentMenus) =>
      currentMenus.map((menu) =>
        menu.id === id ? { ...menu, quantity: Math.max(1, menu.quantity + change) } : menu
      )
    );
  };

  const isExpired = timeLeft === 0;
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const totalOrder = menus.reduce((total, menu) => total + menu.price * menu.quantity, 0);
  const finalPrice = totalOrder + store.deliveryFee;
  const isBelowMin = totalOrder < store.minDeliveryPrice;

  return (
    <main className="mt-[41px] w-[390px] pb-[180px]">
      <BackBar orderCancel />
      <div className="h-4 bg-[#F2F4F6]" />
      <div className="px-5 py-3 text-[15px] text-[#F04452]">
        {isExpired ? "주문 시간이 만료되었습니다." : `남은 주문 시간 ${minutes}:${seconds}`}
      </div>

      <div className="px-5 py-4 bg-white flex justify-between text-sm">
        <span className="font-semibold text-[17px] text-[#6B7684]">{store.name}</span>
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
          onIncrease={() => handleQuantity(menu.id, 1)}
          onDecrease={() => handleQuantity(menu.id, -1)}
          item={{
            id: menu.id,
            name: menu.name,
            extra: menu.ingredients,
            quantity: menu.quantity,
            price: menu.price,
          }}
        />
      ))}

      <div className="px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]">더 담기 +</div>

      <CartSummary totalOrder={totalOrder} deliveryFee={store.deliveryFee} finalPrice={finalPrice} minDeliveryPrice={store.minDeliveryPrice} isExpired={isExpired} />
    </main>
  );
};

export default Cart;
