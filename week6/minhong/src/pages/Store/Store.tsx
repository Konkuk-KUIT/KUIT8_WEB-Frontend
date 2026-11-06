import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import Menu from "../../components/Menu";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Button";
import { useCartStore } from "../../stores/cartStore";
import { getStoreById } from "../../api/stores";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import type {ApiErrorResponse, Store as StoreType} from "../../type/stores"



const Store = () => {
  const { storeId } = useParams();

  const addMenu = useCartStore((state) => state.addMenu);
  const currMenu = useCartStore((state)=>state.menus);
  const clearMenu = useCartStore((state)=>state.clear);
  const isDifferentStore = currMenu.some((m)=>m.storeId !== Number(storeId));

  const { data: store, isPending, isError, error, refetch } = useQuery<StoreType, AxiosError<ApiErrorResponse>>({
    queryKey: ["stores", storeId],
    queryFn: () => getStoreById(Number(storeId)),
    retry: false,
  });

  const renderContent = () => {
    // 1. 로딩
    if (isPending) {
      return (
        <p
          aria-live="polite"
          className="px-6 py-10 text-center text-[15px] text-[#6b7684]"
        >
          가게를 불러오는 중입니다.
        </p>
      );
    }

    // 2. 에러
    if (isError) {
      // 2-1. 404 → 가게 없음

      if (error.response?.status === 404) {
        return (
          <section className="flex h-screen w-[390px] flex-col items-center justify-center gap-[8px] px-[24px]">
            <span className="mb-[8px] text-[56px]">🏪</span>
            <h1 className="text-[22px] font-bold text-[#191f28]">가게를 찾을 수 없어요</h1>
            <p className="text-center text-[15px] text-[#6b7684]">
              주소가 잘못되었거나 더 이상 운영하지 않는 가게예요.
            </p>
            <Link to="/store" className="mt-[24px]">
              <Button size="lg">목록으로 이동</Button>
            </Link>
          </section>
        );
      }

      // 2-2. 그 외 (500, 네트워크 오류 등) → 다시 시도
      return (
        <div
          role="alert"
          className="flex flex-col items-center gap-3 px-6 py-10 text-[15px] text-[#6b7684]"
        >
          <p>가게를 불러오는 중에 오류가 발생했습니다.</p>
          <button
            type="button"
            onClick={() => void refetch()}
            className="cursor-pointer rounded-lg border-0 bg-[#3182f6] px-4 py-2 text-white"
          >
            다시 시도
          </button>
        </div>
      );
    }

    // 3. 성공
    return (
      <>
        <StoreInfo store={store} />
        {store.menus?.map((item) => (
          <Menu key={item.id} item={item} clickHandler={() =>{ 
            if(isDifferentStore){
              if(!confirm("다른 가게의 메뉴가 담겨있어요. 삭제하고 담을까요?")) return; 
              clearMenu();
            }
                 addMenu(item, store.id)
          }} />
        ))}
      </>
    );
  };

  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />
      {renderContent()}
      <OrderBar />
    </main>
  );
};

export default Store;
