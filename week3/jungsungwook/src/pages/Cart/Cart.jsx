import OrderBar from "../../components/OrderBar/OrderBar"
import BackBar from "../../components/BackBar";

// Router에서 데이터를 넘겨주기가 애매한 것 같아서 여기서 데이터를 불러오는 것으로 구현하였습니다
import stores from "../../models/stores";
import CartItem from "../../components/CartItem";
import ItemPirce from "../../components/ItemPirce";
import CartOrderBar from "../../components/CartOrderBar";

const Cart = () => {
    const store = stores[0];
    const menu = store.menus[0];
    const quantity = 1;

    const orderPrice = menu.price * quantity;
    const totalPrice = orderPrice + store.deliveryFee;
    const canOrder = orderPrice >= store.minDeliveryPrice;


    return (
        <div className="w-[390px] h-[844px]">
            <BackBar orderCancel={true}></BackBar>
            <div className=" mt-[41px]">
                <div className="h-[16px] bg-[#F2F4F6]"></div>
            </div>
            <CartItem store={store} menu={menu} quantity={quantity} orderPrice={orderPrice} totalPrice={totalPrice} canOrder={canOrder}>
            </CartItem>
            <div className="flex h-[59px] items-center justify-center border-t border-[#E5E8EB]">
                <button className="text-blue-500 text-base font-semibold text-[#3182F6]">
                    더 담기 +
                </button>
            </div>
            <div className=" mt-[41px]">
                <div className="h-[16px] bg-[#F2F4F6]"></div>
            </div>
            <ItemPirce orderPrice={orderPrice} deliveryFee={store.deliveryFee} totalPrice={totalPrice}>
            </ItemPirce>

            <CartOrderBar totalPrice={totalPrice} minDeliveryPrice={store.minDeliveryPrice} canOrder={canOrder}>

            </CartOrderBar>


        </div>

    )
}

export default Cart
