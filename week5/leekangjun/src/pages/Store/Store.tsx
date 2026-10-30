import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import MenuList from "../../components/MenuList";
import stores from "../../models/stores";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/Button";
import { selectedTotalPrice, useCartStore } from "../Stores/cartStore";

const Store = () => {
    const { storeId } = useParams();
    const navigate=useNavigate();

    const store = stores.find((item) => item.id === Number(storeId));

    const items = useCartStore((state)=>state.items);
    const increase = useCartStore((state)=>state.increase);
    const clearCart = useCartStore((state)=>state.clearCart);

    const totalPrice = useCartStore(selectedTotalPrice);

    if (!store) {
        return (
            <div>
            <p>가게를 찾을 수 없습니다.</p>
            <Button onClick={()=>navigate("/store")}>가게 목록으로 돌아가기</Button>
            </div>
        );
    }

    const handleCartMenu = (menuId: number) => {
        if(items.some((item)=>item.storeId!=store.id)) {
            const confirmed = window.confirm("장바구니를 교체할까요?");

            if(confirmed) {
                clearCart();
            }
            else{
                return;
            }
        }
        increase(store.id, menuId);
    }

    return (
        <main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo item={store} />
            <MenuList  
                menus={store.menus}
                onCartMenu={handleCartMenu}    
            />
			<OrderBar 
                totalPrice={totalPrice}
            />
		</main>
    );
};

export default Store;
