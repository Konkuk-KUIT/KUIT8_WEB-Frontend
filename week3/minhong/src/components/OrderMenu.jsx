const OrderMenu = ({ store, item, cnt }) => {
  const { name, price, options } = item;
  return (
    <article className="flex w-full flex-col">
      <div className="flex items-center justify-between px-6 pt-6.5">
        <h2 className="text-base font-bold text-gray-500">{store.name}</h2>
        {store.minDeliveryPrice > price && (
          <p className="flex items-center gap-1 text-base font-medium text-rose-500">
            최소금액 미달
            <img src="/Warning.svg" alt="경고" className="size-5" />
          </p>
        )}
      </div>

      <div className="flex items-center gap-3.5 py-4 pr-4 pl-6">
        <div className="size-14 shrink-0 rounded-lg bg-gray-200" />
        <div className="flex flex-1 flex-col gap-1.5">
          <h3 className="text-base font-bold text-gray-700">{name}</h3>
          <p className="text-xs font-medium text-gray-500">{options}</p>
          <p className="text-xs font-medium text-gray-500">
            {price.toLocaleString()}원
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-base font-medium text-gray-500">{cnt}개</span>
          <img src="/arrow.svg" alt="" className="size-4 rotate-180" />
        </div>
      </div>
    </article>
  );
};

export default OrderMenu;
