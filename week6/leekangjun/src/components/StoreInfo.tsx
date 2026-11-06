import type { Store } from "../types/stores";

const StoreInfo = ({item}:{item:Store})=>{
    return(
        <div className="border-b border-[#E5E8EB]">
            <div className="pt-[26px] pl-[24px] font-['Pretendard'] text-[26px] not-italic font-bold leading-[normal] text-[#191F28]">
                {item.name}
            </div>

            <div className="flex items-center p-[6px_0_12px_23px]">
                <div className="mr-[5px]">
                    <img src="/yellowStar.svg" alt="ratestar" />
                </div>

                <div className="mr-[9px] text-[#4E5968] font-['Pretendard'] text-[17px] not-italic font-semibold leading-[normal]">
                    {item.rate}
                </div>

                <div className="text-gray-600 text-base font-medium font-['Pretendard']">
                    리뷰{item.reviewCnt.toLocaleString()}
                </div>
            </div>

            <div className="flex items-center p-[9px_0_1px_24px] text-gray-600 text-base font-medium font-['Pretendard']">
                <span className="mr-[12px]">
                    결제방법
                </span>

                <span>
                    토스결제만 현장결제 안됨
                </span>
            </div>

            <div className="flex items-center p-[9px_0_1px_24px] text-gray-600 text-base font-medium font-['Pretendard']">
                <span className="mr-[12px]">
                    최소주문
                </span>

                <span>
                    {item.minDeliveryPrice.toLocaleString()}원
                </span>
            </div>

            <div className="flex items-center p-[9px_0_14px_24px] text-gray-600 text-base font-medium font-['Pretendard']">
                <span className="mr-[12px]">
                    배달시간
                </span>
                <span>
                    약 {item.minDeliveryTime}-{item.maxDeliveryTime}분
                </span>
            </div>
        </div>
    );
};

export default StoreInfo;