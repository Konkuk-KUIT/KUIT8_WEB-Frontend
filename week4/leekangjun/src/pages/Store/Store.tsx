import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import MenuList from "../../components/MenuList";
import stores from "../../models/stores";
import type { Menu } from "../../types/stores";
import {useState } from "react";

const Store = () => {

    const [cartMenuIds, setCartMenuIds] = useState<number[]>([]);

    const handleCartMenu = (menuId: number) => {
        setCartMenuIds((prev)=>[...prev,menuId]);
    }

    const cartMenus = cartMenuIds.map((id)=>
        stores[0].menus?.find((menu)=>menu.id===id))
        .filter((menu): menu is Menu=> menu !== undefined);

    return (
        <main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo item={stores[0]} />
            <MenuList  
                menus={stores[0].menus}
                onCartMenu={handleCartMenu}    
            />
			<OrderBar 
                menus={cartMenus}
            />
		</main>
    );
};

export default Store;
