import Button from "./Button";
import CartCard from "./CartCard";
import type { Store } from "../types/stores";

const TotalOrder = ({item}:{item:Store})=>{
    const menus = item.menus ?? [];

    let orderPrice = 0;
    menus.forEach((menu) => {
        if (menu.isCart) {
            orderPrice += menu.price;
        }
    });

    const totalPrice = orderPrice+item.deliveryFee;

    const canOrder = orderPrice >= item.minDeliveryPrice; 

    return(
        <>
            <div>
                <div className="flex p-[26px_25px_12px_24px] justify-between">
                    <div className="text-gray-500 text-base font-bold font-['Pretendard']">
                        {item.name}
                    </div>

                    {!canOrder && (
                        <div className="flex items-center gap-[6px] ">
                            <span className="text-rose-500 text-base font-medium font-['Pretendard']">
                                최소금액 미달
                            </span>
                            <img src="/warning.svg" alt="warning" />
                        </div>
                    )}
                </div>

                {menus.map((menu)=>(
                    menu.isCart && <CartCard key={menu.id} menu={menu} />
                ))}

                <button className="cursor-pointer flex py-[20px] w-full items-center justify-center gap-[3px] border-t border-gray-200">
                    <span className="text-blue-500 text-base font-semibold font-['Pretendard']">
                        더 담기
                    </span>
                    <img src="/plus.svg" alt="plus" />
                </button>
            </div>

            <div className="w-full h-4 bg-gray-100"></div>

            <div className="flex flex-col p-[24px_23px_0_24px]">
                <div className="flex justify-between mb-[18px]">
                    <span className="text-gray-400 text-base font-medium font-['Pretendard']">
                        주문금액
                    </span>

                    <span className="text-gray-600 text-base font-medium font-['Pretendard']">
                        {orderPrice.toLocaleString()}원
                    </span>
                </div>

                <div className="flex justify-between mb-[26px]">
                    <span className="text-gray-400 text-base font-medium font-['Pretendard']">
                        배달요금
                    </span>

                    <span className="text-gray-600 text-base font-medium font-['Pretendard']">
                        {item.deliveryFee.toLocaleString()}원
                    </span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-600 text-base font-medium font-['Pretendard']">
                        총 결제금액
                    </span>

                    <span className="text-gray-600 text-base font-semibold font-['Pretendard']">
                        {totalPrice.toLocaleString()}원
                    </span>
                </div>
            </div>

            <div className="fixed bottom-[34px] flex w-[390px] flex-col items-center px-[20px] gap-[19px]">
                <span className="flex justify-center text-gray-500 text-base font-medium font-['Pretendard']">
                    최소 주문금액 {item.minDeliveryPrice.toLocaleString()}원
                </span>

                <div className="w-full [&>button]:w-full [&>button]:h-[56px] [&>button]:rounded-[16px]">
                    <Button disabled={!canOrder}>
                        {totalPrice.toLocaleString()}원 결제하기
                    </Button>
                </div>
            </div>
            
        </>
    );
};

export default TotalOrder;