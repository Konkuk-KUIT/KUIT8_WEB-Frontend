const CartItem = ({ store, menu, quantity, canOrder }) => {
    return (
        <div className="w-[390px]">
            <div className="flex items-center justify-between px-[24px] pt-[26px]">
                <span className="text-base font-semibold text-[#6B7684]">
                    {store.name}
                </span>

                {!canOrder && (
                    <span className="text-base font-medium text-[#F04452]">
                        최소금액 미달 ⓘ
                    </span>
                )}


            </div>
            <div className="relative flex px-[24px] pt-[19px] h-[110px]">
                {/* 이미지 */}
                <div className="h-[54px] w-[54px] rounded-lg bg-[#ECECEC]" />

                {/* 메뉴 정보 */}
                <div className="ml-[16px] flex flex-col gap-[5px]">
                    <div className="text-[16px] font-semibold text-[#333D4B]">
                        {menu.name}
                    </div>

                    <div className="w-[210px] text-xs text-[#6B7684]">
                        추천소스, 채소볼, 베이컨추가, 시저드레싱 추가
                    </div>

                    <div className="text-xstext-[#6B7684]">
                        {menu.price.toLocaleString()}원
                    </div>
                </div>

                {/* 수량 + 화살표 */}
                <div className="absolute right-[24px] top-[54px] flex items-center gap-[16px]">
                    <span className="text-[16px] text-[#6B7684]">
                        1개
                    </span>

                    <span className="text-[24px] text-[#8B95A1]">
                        &gt;
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;