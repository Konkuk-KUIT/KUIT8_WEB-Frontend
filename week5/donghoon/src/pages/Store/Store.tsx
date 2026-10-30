import { Link, useParams } from "react-router-dom";
import type { Menu } from "../../types/stores";

import BackBar from "../../components/BackBar";
import MenuSection from "../../components/MenuSection";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";

import { useCartStore } from "../../store/useCartStore";

const Store = () => {
  // 1. URL에서 가게 ID 가져오기
  const { storeId } = useParams();

  const store = stores.find(
    (item) => item.id === Number(storeId)
  );

  // 2. Zustand에서 필요한 상태와 함수 가져오기
  const cartStoreId = useCartStore((state) => state.storeId);
  const cartItems = useCartStore((state) => state.items);
  const addMenu = useCartStore((state) => state.addMenu);

  // 3. 메뉴 담기
  const handleAddMenu = (menu: Menu) => {
    if (!store) return;

    // 다른 가게 메뉴를 담으려는 경우
    if (
      cartStoreId !== null &&
      cartStoreId !== store.id &&
      cartItems.length > 0
    ) {
      const confirmed = window.confirm(
        "다른 가게의 메뉴는 함께 담을 수 없습니다.\n" +
        "기존 장바구니를 비우고 새로 담을까요?"
      );

      // 취소하면 아무것도 변경하지 않음
      if (!confirmed) return;
    }

    // 같은 가게이거나 교체를 승인한 경우
    addMenu(store.id, menu);
  };

  // 4. 존재하지 않는 가게 처리
  if (!store) {
    return (
      <main className="mx-auto mt-[100px] w-[390px] px-[24px] text-center">
        <h1 className="text-[22px] font-bold text-[#191f28]">
          가게를 찾을 수 없습니다.
        </h1>

        <p className="mt-[12px] text-[15px] text-[#6b7684]">
          존재하지 않거나 잘못된 가게 주소입니다.
        </p>

        <Link
          to="/store"
          className="mt-[24px] inline-block rounded-[8px] bg-[#3182f6] px-[20px] py-[12px] text-white"
        >
          가게 목록으로 돌아가기
        </Link>
      </main>
    );
  }

  // 5. 가게 상세 페이지
  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />

      <StoreInfo store={store} />

      {store.menus && store.menus.length > 0 ? (
        <MenuSection
          menus={store.menus}
          onAddMenu={handleAddMenu}
        />
      ) : (
        <p className="px-[24px] py-[30px] text-[15px] text-[#6b7684]">
          현재 등록된 메뉴가 없습니다.
        </p>
      )}

      <OrderBar />
    </main>
  );
};

export default Store;