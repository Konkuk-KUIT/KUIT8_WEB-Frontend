const StoreInfo = ({ store }) => {
    const {
        name,
        rate,
        reviewCnt,
        minDeliveryTime,
        maxDeliveryTime,
        minDeliveryPrice,
        deliveryFee
    } = store;
    return (
        <div className="w-[390px]">
            <div className="h-[160px] bg-[#ECECEC]">
            </div>
            <div className="pt-[26px] pl-[24px] text-[#191F28] text-2xl font-bold">
                {name}
            </div>
            <div className="pl-[23px] pb-[12px]">
                <div className="flex ">
                    <img src="../graystar.svg" className="mr-[5px]" alt="별" />
                    <div className="text-[#4E5968] mr-[9px] text-base font-semibold">
                        {rate}
                    </div>
                    <div className="text-base font-medium text-gray-600">
                        리뷰{reviewCnt.toLocaleString()}
                    </div>
                </div>
            </div>
            <div className="flex flex-col ">
                <div className="flex pl-[24px] pt-[9px] gap-[12px] text-gray-600 text - base font - medium">
                    <div className="">결제 방법</div>
                    <div className="">토스 결제만 현장 결제 안됨</div>
                </div>
                <div className="flex pl-[24px] pt-[9px] gap-[12px] text-gray-600 text - base font - medium">
                    <div className="">최소 주문</div>
                    <div className="">{minDeliveryPrice.toLocaleString()}</div>
                </div>
                <div className="flex pl-[24px] pt-[9px] gap-[12px] text-gray-600 text - base font - medium">
                    <div className="">배달 시간</div>
                    <div className="">약 {minDeliveryPrice}-{maxDeliveryTime}분</div>
                </div>
            </div>

            <div className="mt-[17px] pl-[26px] gap-[26px] flex pb-[18px] border-b border-[#E5E8EB]s">
                <div className="// 샐러드
text-gray-600
text-lg
font-semibold
border-b-2 border-[#191F28]
">
                    샐러드
                </div>
                <div className="
text-gray-400
text-lg
font-semibold">
                    윔볼
                </div>
                <div className="
text-gray-400
text-lg
font-semibold">
                    마이 샌드위치
                </div>
                <div className="
text-gray-400
text-lg
font-semibold">
                    쥬스
                </div>
            </div>

            <div className="pl-[24px] pt-[26px] 
text-gray-400
text-lg
font-semibold">
            샐러드
            </div>
            

            

        </div>



    )
}


export default StoreInfo