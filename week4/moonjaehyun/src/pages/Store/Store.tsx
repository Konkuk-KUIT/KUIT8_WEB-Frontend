import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar";
import InfoStore from "../../components/InfoStore";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenu from "../../components/StoreMenu.tsx";
import stores from "../../models/stores.ts";

const CART_STORAGE_KEY = "contain-store-ids";

export interface StoredMenus {
  id: number;
  quantity: number;
}

const Store = () => {
  const data = stores[0];
  const menus = data.menus;

  const [cartStoredMenus, setCartStoredMenus] = useState<StoredMenus[]>(() => {
    const savedCartStoredMenuIds = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCartStoredMenuIds) {
      return [];
    }

    return JSON.parse(savedCartStoredMenuIds) as StoredMenus[];
  });

  const handleContain = (containId: number) => {
    setCartStoredMenus((prev) =>
      prev.some((item) => item.id === containId)
        ? prev.map((item) =>
            item.id === containId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prev, { id: containId, quantity: 1 }],
    );
  };

  const totalPrice = cartStoredMenus.reduce((total, item) => {
    const menu = menus?.find((menu) => menu.id === item.id);
    return total + (menu?.price ?? 0) * item.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartStoredMenus));
  }, [cartStoredMenus]);

  const storeMenus = menus?.map((menu) => (
    <StoreMenu key={menu.id} menu={menu} onContainMenu={handleContain} />
  ));

  const navigate = useNavigate();

  return (
    <main className="mt-[41px] mb-[77px] w-[390px] ">
      <BackBar orderCancel={false} />
      <InfoStore
        name={data.name}
        rate={data.rate}
        reviewCnt={data.reviewCnt}
        minDeliveryPrice={data.minDeliveryPrice}
        minDeliveryTime={data.minDeliveryTime}
        maxDeliveryTime={data.maxDeliveryTime}
      ></InfoStore>
      <section>
        <div className="box-border flex h-[57px] w-[390px] items-start border-t border-[#e5e8eb] pt-[25px] pl-[24px]">
          <h2
            id="menu-section-title"
            className="text-[17px] leading-[normal] font-semibold whitespace-nowrap text-[#6b7684]"
          >
            샐러드
          </h2>
        </div>
        {storeMenus}
      </section>
      <OrderBar
        totalPrice={totalPrice}
        handleOrder={() => navigate("/cart")}
      ></OrderBar>
    </main>
  );
};

export default Store;
