const StoreInfo = ({ store }) => {
  return (
    <div className="flex w-full flex-col gap-2 border-b border-[#E5E8EB] px-6 pt-6.5 pb-4">
      <h1 className="text-2xl font-bold text-gray-900">{store.name}</h1>
      <div className="flex items-center gap-1 text-base text-gray-600">
        <svg
          width="18"
          height="19"
          viewBox="0 0 11 10"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-[#FFD158]"
        >
          <path d="M4.74486 0.345361C4.89454 -0.115294 5.54624 -0.115294 5.69592 0.345361L6.58549 3.08319C6.65243 3.2892 6.84441 3.42868 7.06102 3.42868H9.93974C10.4241 3.42868 10.6255 4.04849 10.2336 4.33319L7.9047 6.02526C7.72945 6.15258 7.65613 6.37826 7.72306 6.58427L8.61264 9.3221C8.76231 9.78276 8.23507 10.1658 7.84322 9.88112L5.51428 8.18905C5.33904 8.06173 5.10174 8.06173 4.9265 8.18905L2.59756 9.88112C2.20571 10.1658 1.67847 9.78275 1.82814 9.3221L2.71772 6.58427C2.78465 6.37826 2.71132 6.15258 2.53608 6.02526L0.207146 4.33319C-0.184711 4.04849 0.0166775 3.42868 0.501039 3.42868H3.37976C3.59637 3.42868 3.78835 3.2892 3.85529 3.08319L4.74486 0.345361Z" />
        </svg>
        <span className="font-semibold">{store.rate}</span>
        <span className="ml-2 font-medium">리뷰 {store.reviewCnt}</span>
      </div>
      <dl className="flex flex-col gap-2 text-base font-medium text-gray-600">
        <div className="flex">
          <dt className="w-16 shrink-0">결제방법</dt>
          <dd>토스결제만 현장결제 안됨</dd>
        </div>
        <div className="flex">
          <dt className="w-16 shrink-0">최소주문</dt>
          <dd>{store.minDeliveryPrice.toLocaleString()}원</dd>
        </div>
        <div className="flex">
          <dt className="w-16 shrink-0">배달시간</dt>
          <dd>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default StoreInfo;
