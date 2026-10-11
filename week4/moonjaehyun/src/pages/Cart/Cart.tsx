import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar";
import CartCheckoutBar from "../../components/CartCheckoutBar";
import CartStoreSection from "../../components/CartStoreSection";
import OrderSummary from "../../components/OrderSummary";
import stores from "../../models/stores";
import type { StoredMenus } from "../Store/Store";

const CART_STORAGE_KEY = "contain-store-ids";

const Cart = () => {
  const store = stores[0];
  const navigate = useNavigate();

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
  const isCheckoutDisabled = isBelowMinimum || cartItems.length === 0;

  return (
    <main className="min-h-screen w-[390px] bg-white pt-[41px] pb-[95px]">
      <BackBar orderCancel={true} />
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
