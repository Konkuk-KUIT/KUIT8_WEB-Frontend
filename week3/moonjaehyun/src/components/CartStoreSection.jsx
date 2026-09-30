import OrderMenu from "./OrderMenu";

const CartStoreSection = ({
  storeName,
  items,
  isBelowMinimum,
  onAddMore,
  onQuantityClick,
}) => {
  return (
    <section className="w-[390px] bg-white" aria-labelledby="cart-store-name">
      <header className="flex h-[58px] w-[390px] items-start px-[24px] pt-[26px]">
        <h2
          id="cart-store-name"
          className="text-[17px] leading-[20px] font-bold whitespace-nowrap text-[#6b7684]"
        >
          {storeName}
        </h2>

        {isBelowMinimum && (
          <div className="mt-px ml-auto flex items-center gap-[4px] text-[#f04452]">
            <span className="text-[15px] leading-[18px] font-medium whitespace-nowrap">
              최소금액 미달
            </span>
            <img src="/alert.svg" alt="" />
          </div>
        )}
      </header>

      {items.map((item) => (
        <OrderMenu
          key={item.id}
          {...item}
          onQuantityClick={() => onQuantityClick?.(item.id)}
        />
      ))}

      <button
        type="button"
        onClick={onAddMore}
        className="flex h-[59px] w-[390px] cursor-pointer items-center justify-center gap-[8px] border-0 border-t border-solid border-[#e5e8eb] bg-white p-0 text-[#3182f6]"
      >
        <span className="text-[17px] leading-[20px] font-semibold">
          더 담기
        </span>
        <img src="/cart-plus.svg" alt="" />
      </button>
    </section>
  );
};

export default CartStoreSection;
