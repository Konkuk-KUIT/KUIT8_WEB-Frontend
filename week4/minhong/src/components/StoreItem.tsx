 import type { Store } from "../type/stores";

interface StoreItemProps {
  store: Store;
  isLiked: boolean;
  onToggleLike: (storeId: number) => void;
}

export const StoreItem = ({ store, isLiked, onToggleLike }: StoreItemProps) => {
  const {
    id,
    name,
    rate,
    reviewCnt,
    minDeliveryTime,
    maxDeliveryTime,
    deliveryFee,
  } = store;

  return (
    <li className="flex w-[390px] gap-[17px] p-[16px_24px_17px_24px]">
      <div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <div className="flex flex-col gap-[2px] text-[17px] font-semibold text-[#333d4b]">
          {id < 4 && <span>{id}위</span>}
          <span className="text-[17px] font-semibold">{name}</span>
        </div>

        <div className="flex items-center gap-[1px] text-[13px] font-medium text-[#6b7684]">
          <img src="/graystar.svg" alt="ratestar" />
          <span>
            {rate} ({reviewCnt.toLocaleString()})
          </span>
        </div>

        <span className="text-[13px] font-medium text-[#6b7684]">
          {minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비{" "}
          {deliveryFee.toLocaleString()}원
        </span>
      </div>

      <button
        type="button"
        aria-label={`${name} ${isLiked ? "좋아요 취소" : "좋아요"}`}
        aria-pressed={isLiked}
        onClick={() => onToggleLike(id)}
        className="shrink-0 cursor-pointer border-0 bg-transparent text-2xl text-[#3182f6]"
      >
        {isLiked ? "♥" : "♡"}
      </button>
    </li>
  );
};

interface StoreItemsProps {
  items: Store[];
  likedStoreIds: number[];
  onToggleLike: (storeId: number) => void;
}

export const StoreItems = ({
  items,
  likedStoreIds,
  onToggleLike,
}: StoreItemsProps) => {
  if (items.length === 0) {
    return (
      <p className="px-6 py-10 text-center text-[15px] text-[#6b7684]">
        검색 결과가 없습니다.
      </p>
    );
  }

  return (
    <ul aria-label="가게 목록" className="mt-[12px] flex w-[390px] flex-col">
      {items.map((store) => (
        <StoreItem
          key={store.id}
          store={store}
          isLiked={likedStoreIds.includes(store.id)}
          onToggleLike={onToggleLike}
        />
      ))}
    </ul>
  );
};

export default StoreItems;