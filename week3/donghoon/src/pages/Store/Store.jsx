import BackBar from "../../components/BackBar";
import MenuSection from "../../components/MenuSection";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";

const Store = () => {
  // 이번 주차에서는 첫 번째 가게를 고정해서 사용
  const store = stores[0];

  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />

      {/* 가게 정보 영역 */}
      <StoreInfo store={store} />

      {/* 메뉴 영역 전체 */}
      <MenuSection menus={store.menus} />

      {/* 우선 얼마가 담기는지 몰라 그냥 0원 그대로 */}
      <OrderBar />
    </main>
  );
};

export default Store;