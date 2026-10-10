
import type { Store, Menu } from "../types/stores";

interface CartItemProps {
    store: Store;
    menu: Menu;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    orderPrice: number;
    isExpired: boolean;
}

const CartItem = ({
    store,
    menu,
    quantity,
    onIncrease,
    onDecrease,
    orderPrice,
    isExpired,
}: CartItemProps) => {
    return (
        <div className="relative h-[168px] w-[390px]">
            {/* 가게 이름 */}
            <span className="absolute left-[24px] top-[26px] text-[17px] font-bold leading-[20px] text-[#6b7684]">
                {store.name}
            </span>

            {/* 최소금액 미달 */}
            {!isExpired && orderPrice < store.minDeliveryPrice && (
                <div className="absolute right-[24px] top-[27px] flex items-center gap-[6px]">
                    <span className="text-[15px] font-medium leading-[18px] text-[#f04452]">
                        최소금액 미달
                    </span>

                    <img
                        src="/warning.svg"
                        alt="최소금액 미달"
                        className="h-[16px] w-[16px]"
                    />
                </div>
            )}

            {/* 상품 이미지 */}
            <div className="absolute left-[24px] top-[77px] h-[54px] w-[54px] rounded-[8px] bg-[#ececec]" />

            {/* 상품 정보 */}
            <div className="absolute left-[94px] top-[74px]">
                {/* 메뉴 이름 */}
                <div className="text-[17px] font-bold leading-[20px] text-[#333d4b]">
                    {menu.name}
                </div>

                {/* 옵션 */}
                <div className="mt-[5px] h-[32px] w-[210px] overflow-hidden text-[13px] font-medium leading-[16px] text-[#6b7684]">
                    추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
                </div>

                {/* 메뉴 단가 */}
                <div className="mt-[5px] text-[13px] font-medium leading-[16px] text-[#6b7684]">
                    {menu.price.toLocaleString()}원
                </div>
            </div>

            {/* 수량 및 증가·감소 버튼 */}
            <div className="absolute right-[20px] top-[83px] z-20 flex items-center gap-[8px]">
                <span className="whitespace-nowrap text-[15px] font-medium text-[#6b7684]">
                    {quantity}개
                </span>

                <div className="flex flex-col">
                    {/* 수량 증가 버튼 */}
                    <button
                        type="button"
                        onClick={onIncrease}
                        aria-label="수량 증가"
                        className="relative z-20 flex h-[24px] w-[24px] cursor-pointer items-center justify-center"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 10L8 5L13 10"
                                stroke="#6B7684"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {/* 수량 감소 버튼 */}
                    <button
                        type="button"
                        onClick={onDecrease}
                        disabled={quantity <= 1}
                        aria-label="수량 감소"
                        className="relative z-20 flex h-[24px] w-[24px] cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M3 6L8 11L13 6"
                                stroke="#6B7684"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
