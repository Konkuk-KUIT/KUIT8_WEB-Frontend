
import OrderBar from "../../components/OrderBar/OrderBar";
import BackBar from "../../components/BackBar";
import StoreInfo from "../../components/StoreInfo";
import { getStore } from "../../api/store";
import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import StoreItems from "../../components/StoreItems";

import { Link, useParams } from "react-router-dom";
import { useCartStore } from "../../useCartStore";


const Store = () => {
  // URL에서 가게 ID 가져오기
  const { storeId } = useParams();
  const id = Number(storeId);
  // URL의 ID와 일치하는 가게 찾기


  const {
    data: selectedStore,
    isPending,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["store", id],
    queryFn: () => getStore(id),
    retry: false,
  });



  // Zustand에서 메뉴 추가 함수 가져오기
  const addMenu = useCartStore((state) => state.addMenu);

  const isStoreNotFound =
    isAxiosError<{ code: string }>(error) &&
    error.response?.status === 404 &&
    error.response.data.code === "STORE_NOT_FOUND";

  return (

    isPending ? (
      <p
        aria-live="polite"
        className="px-6 py-10 text-center text-[15px] text-[#6b7684]"
      >
        가게를 불러오는 중입니다.
      </p>
    ) : isError && !isStoreNotFound ? (
      <div
        role="alert"
        className="flex flex-col items-center gap-3 px-6 py-10 text-[15px] text-[#6b7684]"
      >
        <p>가게를 불러오지 못했습니다.</p>
        <button
          type="button"
          onClick={() => void refetch()}
          className="cursor-pointer rounded-lg border-0 bg-[#3182f6] px-4 py-2 text-white"
        >
          다시 시도
        </button>
      </div>
    ) : isStoreNotFound || !selectedStore ? (
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
    ) :
      (
        <div className="mt-[41px] flex w-[390px] flex-col">
          <BackBar orderCancel={false} />

          <StoreInfo store={selectedStore} />

          <StoreItems
            menus={selectedStore.menus}
            addMenu={(menu) => addMenu(selectedStore, menu)}
          />

          <OrderBar />
        </div>
      )
  );

};

export default Store;
