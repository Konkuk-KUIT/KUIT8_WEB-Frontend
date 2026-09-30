const OrderMenu = ({ name, price, options, quantity, onQuantityClick }) => {
  const itemPrice = price * quantity;

  return (
    <article className="flex h-[110px] w-[390px] items-start pt-[16px] pr-[20px] pl-[24px]">
      <div className="mt-[3px] size-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      <div className="ml-[16px] flex w-[210px] shrink-0 flex-col">
        <h3 className="text-[17px] leading-[20px] font-bold whitespace-nowrap text-[#333d4b]">
          {name}
        </h3>
        <p className="mt-[5px] h-[32px] w-[210px] text-[13px] leading-[16px] font-medium text-[#6b7684]">
          {options}
        </p>
        <p className="mt-[5px] text-[13px] leading-[16px] font-medium whitespace-nowrap text-[#6b7684]">
          {itemPrice.toLocaleString()}원
        </p>
      </div>

      <button
        type="button"
        onClick={onQuantityClick}
        className="mt-[30px] ml-[16px] flex w-[50px] shrink-0 cursor-pointer items-center gap-[11px] border-0 bg-transparent p-0 text-[#6b7684]"
        aria-label={`${name} 수량 변경`}
      >
        <span className="text-[15px] leading-[18px] font-medium whitespace-nowrap">
          {quantity}개
        </span>
        <img src="/cart-chevron.svg" alt="" />
      </button>
    </article>
  );
};

export default OrderMenu;
