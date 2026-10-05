import BackBar from "../../components/BackBar";
import { useParams } from "react-router-dom";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import MenuItem from "../../components/MenuItem/MenuItem";
import stores from "../../models/stores";

const Store = () => {
  const { storeId } = useParams();
  const store = stores.find((s) => s.id === Number(storeId));

  if (!store) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-600">가게를 찾을 수 없습니다.</p>
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
          />
        ))}
      </div>

      <OrderBar />
    </main>
  );
};

export default Store;
