import type { Menu } from "../types/stores";
import Button from "./Button";

interface StoreMenuItemProps {
  menu: Menu;
  onAddMenu: (menu: Menu) => void;
}

const StoreMenuItem = ({ menu, onAddMenu }: StoreMenuItemProps) => {
  return (
    <div className="flex min-h-[110px] w-[390px] items-center gap-[16px] px-[24px] py-[16px]">

      {/* 상품 이미지 */}
      <div className="h-[54px] w-[54px] shrink-0 rounded-full bg-[#ececec]" />

      {/* 메뉴 정보 */}
      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">

        {/* 메뉴 이름 및 BEST */}
        <div className="flex flex-wrap items-center gap-[6px]">
          <span className="text-[17px] font-semibold text-[#333d4b]">
            {menu.name}
          </span>

          {menu.isBest && (
            <span className="text-[17px] font-semibold text-[#3182f6]">
              BEST
            </span>
          )}
        </div>

        {/* 메뉴 가격 */}
        <span className="text-[13px] font-medium text-[#6b7684]">
          {menu.price.toLocaleString()}원
        </span>

        {/* 메뉴 재료 */}
        <span className="text-[13px] font-medium leading-[16px] break-words text-[#6b7684]">
          {menu.ingredients}
        </span>
      </div>

      {/* 공통 Button 컴포넌트 */}
      <Button
        type="button"
        size="sm"
        onClick={() => onAddMenu(menu)}
        className="h-[32px] w-[52px] shrink-0 p-0 text-[13px]"
      >
        담기
      </Button>
    </div>
  );
};

export default StoreMenuItem;
