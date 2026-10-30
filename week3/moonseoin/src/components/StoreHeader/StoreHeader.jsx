
export default function StoreHeader({ store }) {
  return (
    <div className="px-6 py-4 border-b border-gray-100">
      <h2 className="text-[26px] font-bold">{store.name}</h2>
      <div className="flex items-center text-sm mt-1 mb-4 text-[#4E5968]">
        <img src="/star.svg" alt="star" className="w-4 h-4 mr-1" />
        <span className="font-medium">{store.rate}</span>
        <span className="ml-1">리뷰 {store.reviewCnt.toLocaleString()}</span>
      </div>

      <div className="text-sm text-[#4E5968] space-y-1">
        <p>
          <span className="mr-3 font-medium">결제방법</span>
          토스결제만 현장결제 안됨
        </p>

        <p>
          <span className="mr-3 font-medium">최소주문</span>
          {store.minDeliveryPrice.toLocaleString()}원
        </p>

        <p>
          <span className="mr-3 font-medium">배달시간</span>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
        </p>
      </div>
    </div>
  );
}
