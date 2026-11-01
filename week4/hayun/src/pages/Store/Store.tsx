import { useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import InfoStore from "../../components/InfoStore";
import MenuItem from "../../components/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import type { Store as StoreType } from "../../types/stores";
import { useState } from "react";
import type { Menu } from "../../types/stores.ts";

interface StoreProps {
    stores: StoreType[];
}

const Store = ({ stores }: StoreProps) => {
    const { storeId } = useParams();
    const store = stores.find((store) => store.id === Number(storeId));

    const [cartMenus, setCartMenus]=useState<Menu[]>([]);

    const handleAddToCart = (menu: Menu) => {
        setCartMenus((prev) => [...prev, menu]);
    };

    if (!store) {
        return <div>가게를 찾을 수 없습니다.</div>;
    }

	return (
        <main className="mx-auto mt-[41px] mb-[77px] w-[390px]">
            <BackBar orderCancel={false} />
            <InfoStore store={store}/>
            <div className="h-[56px] p-[26px_0_11px_24px] text-[17px] text-[#6B7684] font-semibold border-t border-[#E5E8EB]">
                샐러드
            </div>
            <MenuItem
                menus={store.menus ?? []}
                onAddToCart={handleAddToCart}
            />
            <OrderBar 
                cartMenus={cartMenus}
            />
        </main>
	);
};

export default Store;
