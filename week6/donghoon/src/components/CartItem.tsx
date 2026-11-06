import type { CartMenu } from "../types/stores";

interface CartItemProps {
  item: CartMenu;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  const {
    name,
    price,
    options,
    ingredients,
    quantity,
  } = item;

  // 선택 옵션이 없으면 메뉴의 재료 설명 사용
  const description = options.trim() || ingredients;

  return (
    <article className="flex min-h-[110px] w-[390px] items-start px-[24px]">

      {/* 메뉴 이미지 - 3주차 위치 유지 */}
      <div className="mt-[19px] h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      {/* 메뉴 정보 */}
      <div className="ml-[16px] min-w-0 flex-1 pt-[16px] pb-[16px]">

        {/* 메뉴 이름 */}
        <h3 className="text-[17px] font-semibold text-[#333d4b]">
          {name}
        </h3>

        {/* 옵션 또는 재료 설명 */}
        <p className="mt-[5px] max-w-[210px] line-clamp-2 break-keep text-[13px] font-medium leading-[16px] text-[#6b7684]">
          {description}
        </p>

        {/* 가격 + 수량 조절 */}
        <div className="mt-[8px] flex items-center justify-between gap-[8px]">

          {/* 가격 */}
          <span className="whitespace-nowrap text-[13px] font-medium text-[#6b7684]">
            {price.toLocaleString()}원
          </span>

          {/* 수량 조절 */}
          <div className="flex shrink-0 items-center gap-[7px]">

            <button
              type="button"
              onClick={onDecrease}
              disabled={quantity <= 1}
              aria-label={`${name} 수량 감소`}
              className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-[6px] border border-[#d1d6db] text-[#3182f6] disabled:cursor-not-allowed disabled:text-[#b0b8c1]"
            >
              −
            </button>

            <span className="min-w-[26px] text-center whitespace-nowrap text-[14px] font-medium text-[#4e5968]">
              {quantity}개
            </span>

            <button
              type="button"
              onClick={onIncrease}
              aria-label={`${name} 수량 증가`}
              className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-[6px] border border-[#d1d6db] text-[#3182f6]"
            >
              +
            </button>

          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
