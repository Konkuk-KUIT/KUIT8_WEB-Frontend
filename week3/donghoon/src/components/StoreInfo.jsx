const StoreInfo = ({ store }) => {
  const {
    name,
    rate,
    reviewCnt,
    minDeliveryPrice,
    minDeliveryTime,
    maxDeliveryTime,
  } = store;

  return (
    <section className="w-[390px] border-b border-[#f2f4f6]">
      {/* 가게 이름 */}
      <h1 className="pt-[26px] pr-[24px] pb-[2px] pl-[24px] text-[26px] font-bold text-[#191f28]">
        {name}
      </h1>

      {/* 별점 / 리뷰 */}
      <div className="flex items-center pt-[7px] pr-[24px] pb-[12px] pl-[23px] text-[17px] text-[#4e5968]">
        <div className="flex items-center gap-[5px]">
          <span className="text-[20px] leading-[19px] text-[#ffc342]">
            ★
          </span>

          <span className="font-semibold">
            {rate}
          </span>
        </div>

        <span className="ml-[9px] font-medium">
          리뷰{reviewCnt.toLocaleString()}
        </span>
      </div>

      {/* 결제방법 */}
      {/* shrink-0의 의미 : 이 52px 폭은 줄이지 말란 뜻. */}
      <div className="flex items-start pt-[9px] pr-[24px] pb-[1px] pl-[24px] text-[15px] font-medium text-[#4e5968]">
        <span className="w-[52px] shrink-0">
          결제방법
        </span>

        <span className="ml-[12px]">
          토스결제만 현장결제 안됨
        </span>
      </div>

      {/* 최소주문 */}
      <div className="flex items-start pt-[9px] pr-[24px] pb-[1px] pl-[24px] text-[15px] font-medium text-[#4e5968]">
        <span className="w-[52px] shrink-0">
          최소주문
        </span>

        <span className="ml-[12px]">
          {minDeliveryPrice.toLocaleString()}원
        </span>
      </div>

      {/* 배달시간 */}
      <div className="flex items-start pt-[9px] pr-[24px] pb-[14px] pl-[24px] text-[15px] font-medium text-[#4e5968]">
        <span className="w-[52px] shrink-0">
          배달시간
        </span>

        <span className="ml-[12px]">
          약 {minDeliveryTime}-{maxDeliveryTime}분
        </span>
      </div>
    </section>
  );
};

export default StoreInfo;