
import OrderBar from "../../components/OrderBar/OrderBar";
import BackBar from "../../components/BackBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";
import StoreItems from "../../components/StoreItems";

import { Link, useParams } from "react-router-dom";
import { useCartStore } from "../../useCartStore";

const Store = () => {
  // URL에서 가게 ID 가져오기
  const { storeId } = useParams();

  // URL의 ID와 일치하는 가게 찾기
  const selectedStore = stores.find(
    (store) => store.id === Number(storeId)
  );

  // Zustand에서 메뉴 추가 함수 가져오기
  const addMenu = useCartStore((state) => state.addMenu);

  // 존재하지 않는 가게인 경우
  if (!selectedStore) {
    return (
      <div className="mt-[100px] w-[390px] text-center">
        <p className="text-[18px]">
          가게를 찾을 수 없습니다.
        </p>

        <Link
          to="/store"
          className="mt-[20px] block text-[#3182F6]"
        >
          가게 목록으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-[41px] flex w-[390px] flex-col">
      <BackBar orderCancel={false} />

      <StoreInfo store={selectedStore} />

      <StoreItems
        menus={selectedStore.menus}
        addMenu={(menu) => addMenu(selectedStore, menu)}
      />

      <OrderBar />
    </div>
  );
};

export default Store;
