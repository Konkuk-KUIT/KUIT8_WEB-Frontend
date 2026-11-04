import Button from "./Button";
import CartCard from "./CartCard";
import type { Store } from "../types/stores";
import { useEffect, useState } from "react";

interface TotalOrderProps {
    item: Store
}

const TotalOrder = ({item}: TotalOrderProps)=>{
    const [cartMenuIds, setCartMenuIds] = useState<number[]>([1]);
    const [remainTime, setRemainTime]=useState(60);

    useEffect(() => {
        if(remainTime<=0) return;

        const timer = setInterval(() => {
            setRemainTime((prev)=>prev-1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [remainTime]);

    const handleCartMenu = (menuId: number) => {
            setCartMenuIds((prev)=>[...prev,menuId]);
        }

    const handleRemoveMenu = (menuId: number) => {
            setCartMenuIds((prev)=>{
                const index = prev.indexOf(menuId);

                // 해당 메뉴가 없으면 그대로 유지
                if (index === -1) return prev;

                // 해당 인덱스의 요소 하나만 제거
                return prev.filter((_, i) => i !== index);
            });
        }

    const menus = item.menus ?? [];

    const cartItems = menus
        .map((menu) => ({
            menu,
            quantity: cartMenuIds.filter((id) => id === menu.id).length,
        }))
        .filter((item) => item.quantity > 0);

    const orderPrice = cartItems.reduce(
        (sum, { menu, quantity }) => sum + menu.price * quantity,
        0
    );

    const totalPrice = orderPrice?(orderPrice+item.deliveryFee):0;

    const canOrder = orderPrice >= item.minDeliveryPrice; 

    const timeUp=remainTime<=0;

    return(
        <>
            <div>
                <div className="flex p-[26px_25px_12px_24px] justify-between">
                    <div className="text-gray-500 text-base font-bold font-['Pretendard']">
                        {item.name}
                    </div>

                    <span
                        className={timeUp?"text-red-500":"text-gray-500"}>
                        {timeUp? "시간 만료": remainTime}
                    </span>

                    <div
                        className={`flex items-center gap-[6px] ${
                            canOrder ? "invisible" : ""
                        }`}
                    >
                        <span className="text-rose-500 text-base font-medium font-['Pretendard']">
                            최소금액 미달
                        </span>
                        <img src="/warning.svg" alt="warning" />
                    </div>
                </div>

                {cartItems.map(({ menu, quantity }) => (
                    <CartCard
                        key={menu.id}
                        menu={menu}
                        quantity={quantity}
                        onCartMenu={handleCartMenu}
                        onRemoveMenu={handleRemoveMenu}
                    />
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
                    <Button disabled={!canOrder || remainTime<=0}>
                        {totalPrice.toLocaleString()}원 결제하기
                    </Button>
                </div>
            </div>
            
        </>
    );
};

export default TotalOrder;
