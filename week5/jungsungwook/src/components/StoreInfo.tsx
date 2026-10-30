import type { Store } from "../models/stores";

type StoreInfoProps = {
  store: Store;
};

const StoreInfo = ({ store }: StoreInfoProps) => {
  const {
    name,
    rate,
    reviewCnt,
    minDeliveryTime,
    maxDeliveryTime,
    minDeliveryPrice,
  } = store;

  return (
    <div className="w-[390px]">

      <div className="pt-[26px] pl-[24px] text-2xl font-bold text-[#191F28]">
        {name}
      </div>

      <div className="pb-[12px] pl-[23px]">
        <div className="flex">
          <img src="../graystar.svg" className="mr-[5px]" alt="별" />

          <div className="mr-[9px] text-base font-semibold text-[#4E5968]">
            {rate}
          </div>

          <div className="text-base font-medium text-gray-600">
            리뷰 {reviewCnt.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-[12px] pl-[24px] pt-[9px] text-base font-medium text-gray-600">
          <div>결제 방법</div>
          <div>토스 결제만 현장 결제 안됨</div>
        </div>

        <div className="flex gap-[12px] pl-[24px] pt-[9px] text-base font-medium text-gray-600">
          <div>최소 주문</div>
          <div>{minDeliveryPrice.toLocaleString()}원</div>
        </div>

        <div className="flex gap-[12px] pl-[24px] pt-[9px] text-base font-medium text-gray-600">
          <div>배달 시간</div>
          <div>
            약 {minDeliveryTime}-{maxDeliveryTime}분
          </div>
        </div>
      </div>

      

      <div className="mt-[26px] pl-[24px] border-t border-[#E5E8EB] pt-[26px] text-lg font-semibold text-gray-400">
        샐러드
      </div>
    </div>
  );
};

export default StoreInfo;