import { useParams, Link } from "react-router-dom";
import BackBar from "../../components/BackBar.tsx";
import InfoStore from "../../components/InfoStore.tsx";
import MenuItem from "../../components/MenuItem.tsx";
import OrderBar from "../../components/OrderBar/OrderBar.tsx";
import type { Store as StoreType } from "../../types/stores.ts";

interface StoreProps {
    stores: StoreType[];
}

const Store = ({ stores }: StoreProps) => {
    const { storeId } = useParams();
    const store = stores.find((store) => store.id === Number(storeId));

    if (!store) {
        return (
            <div className="mt-[330px] flex flex-col mx-auto w-[390px] h-[200px] items-center justify-center text-center">
                <div className="flex text-[22px] h-[100px] items-center text-[#696969]">
                    해당 가게를 찾을 수 없습니다.
                </div>
                <Link to="/store" className="flex items-center justify-center text-[15px] w-[130px] h-[40px] rounded-[5px] border-[#C0C0C0] border-[1.5px] text-[#808080]">
                    가게 목록 보기
                </Link>
            </div>
        
        );
    }

	return (
        <main className="mx-auto mt-[41px] mb-[77px] w-[390px]">
            <BackBar orderCancel={false} />
            <InfoStore store={store}/>
            <div className="h-[56px] p-[26px_0_11px_24px] text-[17px] text-[#6B7684] font-semibold border-t border-[#E5E8EB]">
                샐러드
            </div>
            <MenuItem
                storeId = {store.id}
                menus={store.menus ?? []}
            />
            <OrderBar/>
        </main>
	);
};

export default Store;
