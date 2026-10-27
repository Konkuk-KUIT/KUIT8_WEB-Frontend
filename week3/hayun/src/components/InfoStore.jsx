const InfoStore = ({ store }) => {
    const {
        name,
        rate,
        reviewCnt,
        minDeliveryTime,
        maxDeliveryTime,
        minDeliveryPrice,
    } = store;

	return (
        <>
            <div className="p-[26px_0_2px_24px] font-bold text-[26px] text-[#191F28]">
                {name}
            </div>

            <div className="flex h-[38px] pl-[23px] pb-[12px] gap-[5px] items-end">
                <img src="/yellowstar.svg" alt="ratestar" className="w-[17px] h-[18px]" />
                <span className="text-[17px] font-semibold text-[#4E5968]">
                    {rate}
                </span>
                <span className="pl-[4px] text-[16px] text-[#4E5968] font-medium">
                    리뷰{reviewCnt.toLocaleString()}
                </span>
            </div>

            <div className="flex flex-col w-[390px] h-[97px] pt-[9px] pl-[24px] gap-[9px] text-[15px] text-[#4E5968] font-medium">
                <div className="flex h-[18px] gap-[12px]">
                    <span>결제방법</span>
                    <span>토스결제만 현장결제 안됨</span>
                </div>
                <div className="flex h-[18px] gap-[12px]">
                    <span>최소주문</span>
                    <span>{minDeliveryPrice.toLocaleString()}원</span>
                </div>
                <div className="flex h-[18px] gap-[12px]">
                    <span>배달시간</span>
                    <span>약 {minDeliveryTime}-{maxDeliveryTime}분</span>
                </div>
            </div>
        </>

	);
};

export default InfoStore;
