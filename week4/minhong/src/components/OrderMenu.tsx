import type { Menu, Store } from "../type/stores";

type OrderMenuProps = {
  store : Store;
  item : Menu;
  cnt : number;
  isOverPrice : boolean;
  onIncrease : () => void;
  onDecrease : () => void;
}

const OrderMenu = ({ store, item, cnt, isOverPrice, onIncrease, onDecrease } : OrderMenuProps) => {
  const { name, price, options } = item;
  return (
    <article className="flex w-full flex-col">
      <div className="flex items-center justify-between px-6 pt-6.5">
        <h2 className="text-base font-bold text-gray-500">{store.name}</h2>
        {!isOverPrice && (
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
          <button
            type="button"
            onClick={onDecrease}
            disabled={cnt <= 1}
            aria-label="수량 감소"
            className="grid size-7 cursor-pointer place-items-center rounded-full border border-gray-200 text-gray-500 disabled:cursor-not-allowed disabled:text-gray-300"
          >
            −
          </button>
          <span className="min-w-8 text-center text-base font-medium text-gray-500">{cnt}개</span>
          <button
            type="button"
            onClick={onIncrease}
            aria-label="수량 증가"
            className="grid size-7 cursor-pointer place-items-center rounded-full border border-gray-200 text-gray-500"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export default OrderMenu;
