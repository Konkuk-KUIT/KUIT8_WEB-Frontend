const StoreInfo = ({ store }) => {
  return (
    <article className="inline-flex flex-col align-start">
      <section className="flex w-[390px] pt-[26px] pb-[2px] pl-[24px] align-center">
        <h2 className="text-[26px] font-bold text-[#191f28]">{store.name}</h2>
      </section>

      <section className="flex items-center w-[390px] h-[38px] pl-5.75 gap-2.25">
        <div className="flex gap-1.25">
          <img src="/graystar.svg" alt="별점" />
          <span className="text-[17px] font-bold text-[#4E5968]">
            {store.rate}
          </span>
        </div>
        <span className="text-[16px] font-medium text-[#4e5968]">
          리뷰 {store.reviewCnt.toLocaleString()}
        </span>
      </section>

      <section className="flex flex-col text-[15px] font-medium text-[#4e5968]">
        <div className="flex items-center pt-2.25 pl-6 gap-3">
          <p >결제방법</p>
          <p >토스결제만 현장결제 안됨</p>
        </div>

		<div className="flex items-center pt-2.25 pl-6 gap-3">
          <p >최소주문</p>
          <p >
            {store.minDeliveryPrice.toLocaleString()}원
          </p>
        </div>

        <div className="flex items-center pt-2.25 pl-6 gap-3">
          <p >배달시간</p>
          <p className="text-[#4e5968]">
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </p>
        </div>
      </section>

	  <section className="pt-3.5 border-b-[1px] border-[#E5E8EB]"></section>
    </article>
  );
};

export default StoreInfo;
