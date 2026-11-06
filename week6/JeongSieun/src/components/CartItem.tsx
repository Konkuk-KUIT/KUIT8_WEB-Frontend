
import type { Menu } from "../types/stores";

interface CartItemProps {
  menu: Menu;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem = ({
  menu,
  quantity,
  onIncrease,
  onDecrease,
}: CartItemProps) => {
  return (
    <div className="flex w-full items-center gap-[16px] px-[24px] py-[18px]">
      {/* 메뉴 이미지 */}
      <div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

      {/* 메뉴 정보 */}
      <div className="min-w-0 flex-1">
        <div className="text-[17px] font-bold text-[#333d4b]">
          {menu.name}
        </div>

        <div className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
          {menu.ingredients}
        </div>

        <div className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
          {menu.price.toLocaleString()}원
        </div>
      </div>

      {/* 수량 조절 */}
      <div className="flex shrink-0 items-center gap-[8px]">
        <span className="text-[15px] font-medium text-[#6b7684]">
          {quantity}개
        </span>

        <div className="flex flex-col">
          <button
            type="button"
            onClick={onIncrease}
            aria-label={`${menu.name} 수량 증가`}
            className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center"
          >
            ▲
          </button>

          <button
            type="button"
            onClick={onDecrease}
            disabled={quantity <= 1}
            aria-label={`${menu.name} 수량 감소`}
            className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-30"
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
