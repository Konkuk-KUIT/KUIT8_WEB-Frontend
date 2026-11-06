import { useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getStore } from "../../api/stores.ts";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button.tsx";
import InfoStore from "../../components/InfoStore";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenu from "../../components/StoreMenu.tsx";
import { useCartStore } from "../../stores/useCartStore.tsx";

export interface StoredMenus {
  id: number;
  quantity: number;
}

const Store = () => {
  const navigate = useNavigate();

  const storeId = Number(useParams().storeId);
  const hasValidStoreId = Number.isSafeInteger(storeId) && storeId > 0;

  const {
    data: store,
    isPending,
    error,
    refetch,
  } = useQuery({
    queryKey: ["store", storeId],
    queryFn: () => getStore(storeId),
    enabled: hasValidStoreId,
    retry: false,
  });

  const cartStore = useCartStore();

  // useEffect(() => {
  //   localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartStoredMenus));
  // }, [cartStoredMenus]);

  if (hasValidStoreId && isPending) {
    return (
      <main className="mx-auto mt-[41px] w-[390px]">
        <BackBar orderCancel={false} />
        <p
          role="status"
          className="px-6 py-10 text-center text-[15px] text-[#6b7684]"
        >
          가게 정보를 불러오는 중입니다.
        </p>
      </main>
    );
  }

  if (!store) {
    const isNotFound =
      !hasValidStoreId ||
      (isAxiosError(error) && error.response?.status === 404);

    return (
      <main className="mx-auto mt-[41px] w-[390px]">
        <BackBar orderCancel={false} />
        <section className="flex min-h-[60vh] flex-col items-center justify-center px-[20px] text-center">
          <h1 className="text-[20px] font-semibold text-[#333d4b]">
            {isNotFound
              ? "가게를 찾을 수 없습니다"
              : "가게 정보를 불러오지 못했습니다"}
          </h1>
          <p className="mt-[12px] text-[15px] leading-[22px] text-[#6b7684]">
            {isNotFound ? (
              <>
                주소가 잘못되었거나 존재하지 않는 가게입니다.
                <br />
                가게 목록에서 다시 선택해 주세요.
              </>
            ) : (
              "잠시 후 다시 시도해 주세요."
            )}
          </p>
          <Button
            size="checkout"
            className="mt-[28px]"
            onClick={
              isNotFound ? () => navigate("/store") : () => void refetch()
            }
          >
            {isNotFound ? "가게 목록으로 이동" : "다시 시도"}
          </Button>
        </section>
      </main>
    );
  }

  const menus = store.menus;

  const handleContain = (containId: number) => {
    const menu = menus?.find((item) => item.id === containId);
    if (!menu) throw new Error("메뉴가 존재하지 않습니다!");
    cartStore.addMenu(store, {
      ...menu,
      quantity: 1,
    });
  };

  const storeMenus = menus?.map((menu) => (
    <StoreMenu key={menu.id} menu={menu} onContainMenu={handleContain} />
  ));

  return (
    <main className="mx-auto mt-[41px] mb-[77px] w-[390px] ">
      <BackBar orderCancel={false} />
      <InfoStore
        name={store.name}
        rate={store.rate}
        reviewCnt={store.reviewCnt}
        minDeliveryPrice={store.minDeliveryPrice}
        minDeliveryTime={store.minDeliveryTime}
        maxDeliveryTime={store.maxDeliveryTime}
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
      <OrderBar></OrderBar>
    </main>
  );
};

export default Store;
