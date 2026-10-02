const CartItem = ({ store, menu }) => {
    return (
        <div className="relative h-[168px] w-[390px]">
            {/* 가게 이름 */}
            <div className="absolute left-[24px] top-[26px]">
                <span className="text-[17px] font-bold leading-[20px] text-[#6b7684]">
                    {store.name}
                </span>
            </div>

            {menu.price < store.minDeliveryPrice && (
                <div className="absolute right-[24px] top-[27px] flex items-center gap-[6px]">
                    <span className="text-[15px] font-medium leading-[18px] text-[#f04452]">
                        최소금액 미달
                    </span>

                    <span className="flex h-[13px] w-[13px] items-center justify-center rounded-full bg-[#f04452] text-[9px] font-bold leading-none text-white">
                        !
                    </span>
                </div>
            )}

            {/* 메뉴 이미지 */}
            <div className="absolute left-[24px] top-[77px] h-[54px] w-[54px] rounded-[8px] bg-[#ececec]" />

            {/* 메뉴 정보 */}
            <div className="absolute left-[94px] top-[58px]">
                <div className="text-[17px] font-bold text-[#333d4b]">
                    {menu.name}
                </div>

                <div className="mt-[5px] w-[210px] truncate text-[13px] font-medium text-[#6b7684]">
                    추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
                </div>

                <div className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
                    {menu.price.toLocaleString()}원
                </div>
            </div>

            {/* 수량 */}
            <span className="absolute right-[53px] top-[46px] text-[15px] text-[#6b7684]">
                1개
            </span>

            {/* 오른쪽 화살표 */}
            <span className="absolute right-[20px] top-[49px] text-[20px] text-[#6b7684]">
                ›
            </span>
        </div>
    );
};

export default CartItem;