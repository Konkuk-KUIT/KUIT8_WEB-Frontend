const CartItem = ({ item }) => {
  const { name, price, options, quantity } = item;

  return (
    <article className="flex h-[110px] w-[390px] items-start pl-[24px]">
      {/* 메뉴 이미지 */}
      <div className="mt-[19px] h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      {/* 메뉴 정보 */}
      <div className="ml-[16px] w-[210px] shrink-0 pt-[16px]">
        <h3 className="text-[17px] font-semibold text-[#333d4b]">
          {name}
        </h3>

        <p className="mt-[5px] w-[210px] text-[13px] font-medium leading-[16px] text-[#6b7684]">
          {options}
        </p>

        <p className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
          {price.toLocaleString()}원
        </p>
      </div>

      {/* 수량 */}
      <span className="ml-[16px] self-center whitespace-nowrap text-[15px] font-medium text-[#6b7684]">
        {quantity}개
      </span>

      {/* 상세 화살표 영역 */}
      <div className="ml-[14px] flex h-[16px] w-[16px] shrink-0 items-center justify-center self-center">
        <img
            src="/chevron-right.svg"
            alt="메뉴 상세"
            className="h-[12px] w-[7px]"
        />
      </div>
    </article>
  );
};

export default CartItem;