import Button from "./Button";
import type { Menu } from "../models/stores";



type StoreItemsProps = {
  menus: Menu[];
  addMenu : (menu : Menu) => void;
};

const StoreItems = ({ menus,addMenu}: StoreItemsProps) => {

  return (
    <div>
      {menus.map((menu) => (
        <div
          key={menu.id}
          className="relative flex px-[24px] py-[28px]"
        >
          {/* 이미지 자리 */}
          <div className="h-[54px] w-[54px] shrink-0 rounded-full bg-[#ECECEC]" />

          {/* 메뉴 정보 */}
          <div className="ml-[16px] flex flex-col gap-[5px]">
            <div className="flex items-center">
              <span className="text-base font-semibold text-gray-700">
                {menu.name}
              </span>

              {menu.isBest && (
                <span className="ml-[6px] text-base font-semibold text-blue-500">
                  BEST
                </span>
              )}
            </div>

            <div className="text-[16px] text-[#4E5968]">
              {menu.price.toLocaleString()}원
            </div>

            <div className="text-[14px] text-[#6B7684]">
              {menu.ingredients}
            </div>
          </div>

          <div className="absolute right-[24px] top-[40px]">
            <Button onClick={()=>addMenu(menu)}>담기</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoreItems;