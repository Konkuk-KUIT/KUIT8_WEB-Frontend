import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import MenuList from "../../components/MenuList";
import stores from "../../models/stores";
import type { Menu } from "../../types/stores";
import {useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/Button";

const Store = () => {
    const { storeId } = useParams();
    const navigate=useNavigate();

    const store = stores.find((item) => item.id === Number(storeId));

    const [cartMenuIds, setCartMenuIds] = useState<number[]>([]);

    if (!store) {
        return (
            <div>
            <p>가게를 찾을 수 없습니다.</p>
            <Button onClick={()=>navigate("/store")}>가게 목록으로 돌아가기</Button>
            </div>
        );
    }

    const handleCartMenu = (menuId: number) => {
        setCartMenuIds((prev)=>[...prev,menuId]);
    }

    const cartMenus = cartMenuIds.map((id)=>
        store.menus?.find((menu)=>menu.id===id))
        .filter((menu): menu is Menu=> menu !== undefined);

    return (
        <main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo item={store} />
            <MenuList  
                menus={store.menus}
                onCartMenu={handleCartMenu}    
            />
			<OrderBar 
                menus={cartMenus}
            />
		</main>
    );
};

export default Store;
