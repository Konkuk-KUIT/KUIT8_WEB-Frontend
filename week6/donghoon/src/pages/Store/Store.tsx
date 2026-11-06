import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";

import type { Menu } from "../../types/stores";

import BackBar from "../../components/BackBar";
import MenuSection from "../../components/MenuSection";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";

import { getStore } from "../../api/stores";
import { useCartStore } from "../../store/useCartStore";

const Store = () => {
  // 1. URL에서 가게 ID 가져오기
  const { storeId } = useParams();
  const numericStoreId = Number(storeId);

  const isValidStoreId =
    Number.isInteger(numericStoreId) && numericStoreId > 0;

  // 2. 서버에서 해당 가게 조회
  const {
    data: store,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["store", numericStoreId],
    queryFn: () => getStore(numericStoreId),
    enabled: isValidStoreId,
    retry: false,
  });

  // 3. Zustand 장바구니 상태
  const cartStoreId = useCartStore((state) => state.storeId);
  const cartItems = useCartStore((state) => state.items);
  const addMenu = useCartStore((state) => state.addMenu);

  // 4. 메뉴 담기 (기존 5주차 기능 유지)
  const handleAddMenu = (menu: Menu) => {
    if (!store) return;

    if (
      cartStoreId !== null &&
      cartStoreId !== store.id &&
      cartItems.length > 0
    ) {
      const confirmed = window.confirm(
        "다른 가게의 메뉴는 함께 담을 수 없습니다.\n" +
        "기존 장바구니를 비우고 새로 담을까요?"
      );

      if (!confirmed) return;
    }

    addMenu(store.id, menu);
  };

  // 5. 로딩 화면 - 이 아래부터가 실습의 핵심. 로딩과 각 오류에 대해서도 처리해야함 (api 명세서대로..)
  if (isValidStoreId && isPending) {
    return (
      <main className="mx-auto mt-[100px] w-[390px] text-center">
        <p>가게 정보를 불러오는 중입니다.</p>
      </main>
    );
  }

  // 6. 존재하지 않는 가게 (404)
  const isNotFound =
    !isValidStoreId ||
    (isError &&
      isAxiosError<{ code: string; message: string }>(error) &&
      error.response?.status === 404 &&
      error.response?.data?.code === "STORE_NOT_FOUND");

  if (isNotFound) {
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

  // 7. 기타 API 오류 
  if (isError || !store) {
    return (
      <main className="mx-auto mt-[100px] w-[390px] text-center">
        <p>가게 정보를 불러오지 못했습니다.</p>
        <button
          type="button"
          onClick={() => void refetch()}
          className="mt-[20px] rounded-[8px] bg-[#3182f6] px-[20px] py-[12px] text-white"
        >
          다시 시도
        </button>
      </main>
    );
  }

  // 8. 정상적인 가게 상세 페이지
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
