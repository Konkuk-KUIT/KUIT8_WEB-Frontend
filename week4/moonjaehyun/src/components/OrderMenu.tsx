interface OrderMenuProps {
  name: string;
  price: number;
  options: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const OrderMenu = ({
  name,
  price,
  options,
  quantity,
  onIncrease,
  onDecrease,
}: OrderMenuProps) => {
  const itemPrice = price * quantity;

  return (
    <article className="flex h-[110px] w-[390px] items-start pt-[16px] pr-[20px] pl-[24px]">
      <div className="mt-[3px] size-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      <div className="ml-[16px] flex min-w-0 flex-1 flex-col">
        <h3 className="truncate text-[17px] leading-[20px] font-bold text-[#333d4b]">
          {name}
        </h3>
        <p className="mt-[5px] line-clamp-2 h-[32px] text-[13px] leading-[16px] font-medium text-[#6b7684]">
          {options}
        </p>
        <p className="mt-[5px] text-[13px] leading-[16px] font-medium whitespace-nowrap text-[#6b7684]">
          {itemPrice.toLocaleString()}원
        </p>
      </div>

      <div className="mt-[30px] ml-[8px] flex shrink-0 items-center gap-[4px] text-[#6b7684]">
        <button
          type="button"
          onClick={onDecrease}
          className="size-[28px] cursor-pointer rounded border border-[#e5e8eb]"
          aria-label={`${name} 수량 감소`}
        >
          −
        </button>
        <span className="min-w-[24px] text-center text-[15px] whitespace-nowrap">
          {quantity}개
        </span>
        <button
          type="button"
          onClick={onIncrease}
          className="size-[28px] cursor-pointer rounded border border-[#e5e8eb]"
          aria-label={`${name} 수량 증가`}
        >
          +
        </button>
      </div>
    </article>
  );
};

export default OrderMenu;
