const StoreInfo = ({ store }) => {
  return (
    <div className="inline-flex flex-col border-b border-[#E5E8EB]">
      <div className="w-96 h-14 relative overflow-hidden">
        <div className="left-[24px] top-[26px] absolute text-gray-900 text-2xl font-bold font-['Pretendard']">
          {store.name}
        </div>
      </div>
      <div className="w-96 h-9 relative overflow-hidden">
        <svg
          width="18"
          height="19"
          viewBox="0 0 11 10"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-6 top-2 fill-[#FFD158]"
        >
          <path d="M4.74486 0.345361C4.89454 -0.115294 5.54624 -0.115294 5.69592 0.345361L6.58549 3.08319C6.65243 3.2892 6.84441 3.42868 7.06102 3.42868H9.93974C10.4241 3.42868 10.6255 4.04849 10.2336 4.33319L7.9047 6.02526C7.72945 6.15258 7.65613 6.37826 7.72306 6.58427L8.61264 9.3221C8.76231 9.78276 8.23507 10.1658 7.84322 9.88112L5.51428 8.18905C5.33904 8.06173 5.10174 8.06173 4.9265 8.18905L2.59756 9.88112C2.20571 10.1658 1.67847 9.78275 1.82814 9.3221L2.71772 6.58427C2.78465 6.37826 2.71132 6.15258 2.53608 6.02526L0.207146 4.33319C-0.184711 4.04849 0.0166775 3.42868 0.501039 3.42868H3.37976C3.59637 3.42868 3.78835 3.2892 3.85529 3.08319L4.74486 0.345361Z" />
        </svg>
        <div className="left-[46px] top-[6px] absolute text-gray-600 text-base font-semibold font-['Pretendard']">
          {store.rate}
        </div>
        <div className="left-[81px] top-[7px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          리뷰 {store.reviewCnt}
        </div>
      </div>
      <div className="w-96 h-7 relative overflow-hidden">
        <div className="left-[24px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          결제방법
        </div>
        <div className="left-[88px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          토스결제만 현장결제 안됨
        </div>
      </div>
      <div className="w-96 h-7 relative overflow-hidden">
        <div className="left-[24px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          최소주문
        </div>
        <div className="left-[88px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          {store.minDeliveryPrice.toLocaleString()}원
        </div>
      </div>
      <div className="w-96 h-10 relative overflow-hidden">
        <div className="left-[24px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          배달시간
        </div>
        <div className="left-[88px] top-[9px] absolute text-gray-600 text-base font-medium font-['Pretendard']">
          약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
