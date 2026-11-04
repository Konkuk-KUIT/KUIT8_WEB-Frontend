import { useCartStore } from "../stores/useCartStore";

const OrderMenu = () => {
    const orderMenus = useCartStore((state) => state.orderList);
    const storeId = useCartStore((state) => state.storeId);
    const removeToCart = useCartStore((state) => state.removeToCart);
    const addToCart = useCartStore((state) => state.addToCart);

	return (
        <div>
            {orderMenus.map((menu) => {
                const {
                    id,
                    name,
                    price,
                    ingredients,
                    quantity,
                } = menu;

                return (
                    <div key={id} className="flex w-[390px] h-[110px] gap-[16px]">
                        <div className="h-[54px] w-[54px] rounded-[8px] bg-[#ECECEC] m-[19px_0_37px_24px]" />

                        <div className="flex flex-col gap-[5px]">
                            <span className="text-[17px] text-[#333D4B] font-bold pt-[16px]">{name}</span>
                            <span className="w-[200px] text-[13px] text-[#6B7684] font-medium">{ingredients}</span>
                            <span className="text-[13px] text-[#6B7684] font-medium">{price.toLocaleString()}원</span>
                        </div>

                        <div className="flex gap-[10px] items-center justify-center">
                            <button
                                type="button"
                                className="cursor-pointer"
                                onClick={() => removeToCart(id)}
                            >
                                <img src="/minus-gray.svg" alt="minus" className="h-[16px] w-[16px]"/>
                            </button>
                            
                            <span>{quantity}개</span>
                            <button
                                type="button"
                                className="cursor-pointer"
                                onClick={() => {
                                    if (storeId !== null) {
                                        addToCart(menu, storeId);
                                    }
                                }}
                            >
                                <img src="/plus-gray.svg" alt="plus" className="h-[16px] w-[16px]"/>
                            </button>
                        </div>                            
                    </div>
                )
            })}
        </div>
	);
};


export default OrderMenu;