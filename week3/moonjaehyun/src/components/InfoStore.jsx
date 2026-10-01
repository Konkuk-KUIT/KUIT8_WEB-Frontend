import SimpleInfo from "./SimpleInfo";

const InfoStore = ({
  name,
  rate,
  reviewCnt,
  minDeliveryPrice,
  minDeliveryTime,
  maxDeliveryTime,
}) => {
  return (
    <div className="inline-flex flex-col items-start pb-4">
      <div className="flex items-center text-[#191F28] text-[26px] not-italic font-bold leading-[normal] pl-6 pr-[225px] pt-[26px] pb-0.5">
        {name}
      </div>
      <div className="flex h-[38px] w-[390px] items-start text-[#4E5968]">
        <span className="mt-[7px] ml-[23px] flex h-[19px] w-[18px] items-center justify-center">
          <img src="/store-rating-star.svg" alt="" />
        </span>
        <span className="mt-[6px] ml-[5px] text-[17px] leading-[normal] font-semibold whitespace-nowrap">
          {rate}
        </span>
        <span className="mt-[7px] ml-[10px] text-[16px] leading-[normal] font-medium whitespace-nowrap">
          리뷰{reviewCnt.toLocaleString()}
        </span>
      </div>
      <SimpleInfo
        title="결재방법"
        description="토스결제만 현장결제 안됨"
      ></SimpleInfo>
      <SimpleInfo title="최소주문" description={minDeliveryPrice}></SimpleInfo>
      <SimpleInfo
        title="배달시간"
        description={`약 ${minDeliveryTime} ~ ${maxDeliveryTime}분`}
      ></SimpleInfo>
    </div>
  );
};

export default InfoStore;
