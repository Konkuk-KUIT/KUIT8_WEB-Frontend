import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import MenuList from "../../components/MenuList";
//import stores from "../../models/stores";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/Button";
import { selectedTotalPrice, useCartStore } from "../../zustand/cartStore";
import { useQuery } from "@tanstack/react-query";
import { getStore } from "../../api/store";
import axios from "axios";
import type { CommonErrorMessage } from "../../types/errorMessage";


const Store = () => {
    const { storeId } = useParams();
    const id=Number(storeId);
    const navigate=useNavigate();

    //const store = stores.find((item) => item.id === Number(storeId));
    const {
        data: store,
        isPending,
        isError,
        error,
        refetch
      } = useQuery({
        queryKey: ["store",id],
        queryFn: ()=>getStore(id),
        retry: false
      });

    const errorRes = axios.isAxiosError<CommonErrorMessage>(error)
        ? error.response: undefined;
    const isNotFound = errorRes?.status===404;

    const items = useCartStore((state)=>state.items);
    const increase = useCartStore((state)=>state.increase);
    const clearCart = useCartStore((state)=>state.clearCart);

    const totalPrice = useCartStore(selectedTotalPrice);

    const handleCartMenu = (menuId: number) => {
        if(!store) return;

        if(items.some((item)=>item.storeId!=store.id)) {
            const confirmed = window.confirm("장바구니를 교체할까요?");

            if(confirmed) {
                clearCart();
            }
            else{
                return;
            }
        }
        increase(store, menuId);
    }

    return (
        <main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />

            {isPending? (
                <p
                aria-live="polite"
                className="px-6 py-10 text-center text-[15px] text-[#6b7684]"
                >
                가게정보를 불러오는 중입니다.
                </p>
            ):isError?(
                isNotFound?(
                    <div>
                        <p>{errorRes?.data?.message}</p>
                        <Button onClick={() => navigate("/store")}>
                            가게 목록으로 돌아가기
                        </Button>
                    </div>
                ):
                (
                <div
                role="alert"
                className="flex flex-col items-center gap-3 px-6 py-10 text-[15px] text-[#6b7684]"
                >
                    <p>가게 정보를 불러오지 못했습니다.</p>
                    <button
                        type="button"
                        onClick={() => void refetch()}
                        className="cursor-pointer rounded-lg border-0 bg-[#3182f6] px-4 py-2 text-white"
                    >
                        다시 시도
                    </button>
                </div>
                )
            ):!store ?(
                <div>
                    <p>가게를 찾을 수 없습니다.</p>
                    <Button onClick={() => navigate("/store")}>
                        가게 목록으로 돌아가기
                    </Button>
                </div>
            ):(
                <>
                    <StoreInfo item={store} />
                    <MenuList  
                        menus={store.menus}
                        onCartMenu={handleCartMenu}    
                    />
                    <OrderBar 
                        totalPrice={totalPrice}
                    />
                </>
            )}
		</main>
    );
};

export default Store;
