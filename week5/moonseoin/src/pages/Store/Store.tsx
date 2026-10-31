import BackBar from "../../components/BackBar";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

import useCartStore from "../../stores/useCartStore";

const Store = () => {
  const { storeId } = useParams();
  const navigate = useNavigate();
  const addMenu = useCartStore((state) => state.addMenu);
  const store = stores.find((s) => String(s.id) === storeId);

  if (!store) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen">
        <p className="text-lg text-gray-600">가게를 찾을 수 없습니다.</p>
        <Button onClick={() => navigate("/store")}>목록으로 이동</Button>
      </div>
    );
  }

  return (
    <main className="mt-[41px] w-[390px]">
      <BackBar orderCancel={false} />

      <StoreHeader store={store} />
      <div className="px-6 mt-4 mb-2 text-[17px] text-[#6B7684] font-semibold">샐러드</div>
      <div className="mb-[120px]">
        {(store.menus ?? []).map((menu) => (
          <MenuItem
            key={menu.id}
            name={menu.name}
            price={menu.price}
            ingredients={menu.ingredients}
            isBest={menu.isBest}
            onAdd={() => addMenu(store.id, menu)}
          />
        ))}
      </div>

      <OrderBar />
    </main>
  );
};

export default Store;
