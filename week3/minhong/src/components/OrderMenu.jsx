const OrderMenu = ({ store, item, cnt }) => {
  const { name, price, options } = item;
  return (
    <article className="w-96 h-40 relative overflow-hidden">
      <h2 className="left-[24px] top-[26px] absolute text-gray-500 text-base font-bold font-['Pretendard']">
        {store.name}
      </h2>

      {store.minDeliveryPrice > price && (
        <p className="left-[264px] top-[27px] absolute flex items-center gap-1 text-rose-500 text-base font-medium font-['Pretendard']">
          최소금액 미달
          <img src="/Warning.svg" alt="경고" className="size-5" />
        </p>
      )}

      <div className="size-14 left-[24px] top-[77px] absolute bg-gray-200 rounded-lg" />

      <div className="w-96 h-28 left-0 top-[58px] absolute">
        <h3 className="left-[95px] top-[16px] absolute text-gray-700 text-base font-bold font-['Pretendard']">
          {name}
        </h3>
        <p className="w-52 left-[94px] top-[41px] absolute text-gray-500 text-xs font-medium font-['Pretendard']">
          {options}
        </p>
        <p className="left-[93px] top-[78px] absolute text-gray-500 text-xs font-medium font-['Pretendard']">
          {price.toLocaleString()}원
        </p>
        <span className="left-[320px] top-[46px] absolute text-gray-500 text-base font-medium font-['Pretendard']">
          {cnt}개
        </span>
        <div className="size-4 left-[370px] top-[64px] absolute origin-top-left rotate-180 overflow-hidden">
          <img src="/arrow.svg" alt="" />
        </div>
      </div>
    </article>
  );
};

export default OrderMenu;
