import type { Menu } from "../types/stores";
import Button from "./Button";

interface StoreMenuProps {
  menu: Menu;
  onContainMenu: (containId: number) => void;
}

const StoreMenu = ({ menu, onContainMenu }: StoreMenuProps) => {
  return (
    <div className="flex min-h-[110px] w-[390px] items-start gap-[16px] px-[24px] pt-[16px]">
      <div className="mt-[12px] size-[54px] shrink-0 rounded-[27px] bg-[#ececec]" />

      <div className="flex w-[204px] shrink-0 flex-col gap-[5px]">
        <div className="flex items-start gap-[7px] text-[17px] leading-[normal] font-semibold whitespace-nowrap">
          <span className="text-[#333d4b]">{menu.name}</span>
          {menu.isBest && <span className="text-[#3182f6]">BEST</span>}
        </div>

        <div className="text-[13px] leading-[16px] font-medium text-[#6b7684]">
          {menu.price.toLocaleString()}원
        </div>

        <div className="w-[201px] break-keep text-[13px] leading-[normal] font-medium text-[#6b7684]">
          {menu.ingredients}
        </div>
      </div>

      <div className="mt-[24px] flex shrink-0">
        <Button onClick={() => onContainMenu(menu.id)} size="sm">
          담기
        </Button>
      </div>
    </div>
  );
};

export default StoreMenu;
