const CartItem = ({ store, menu }) => {
    return (
        <div className="relative h-[168px] w-[390px]">
            {/* 가게 이름 */}
            <span className="absolute left-[24px] top-[26px] text-[17px] font-bold leading-[20px] text-[#6b7684]">
                {store.name}
            </span>

            {/* 최소금액 미달 */}
            {menu.price < store.minDeliveryPrice && (
                <div className="absolute left-[264px] top-[27px] flex items-center gap-[6px]">
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

                {/* 가격 */}
                <div className="mt-[5px] text-[13px] font-medium leading-[16px] text-[#6b7684]">
                    {menu.price.toLocaleString()}원
                </div>
            </div>

            {/* 수량 */}
            <span className="absolute left-[320px] top-[98px] text-[15px] font-normal leading-[18px] text-[#6b7684]">
                1개
            </span>

            {/* 화살표 */}
            <span className="absolute left-[354px] top-[95px] text-[26px] font-light leading-[20px] text-[#6b7684]">
                ›
            </span>
        </div>
    );
};

export default CartItem;