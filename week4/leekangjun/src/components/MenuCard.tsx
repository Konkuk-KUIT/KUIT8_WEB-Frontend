import Button from "./Button";
import type { Menu } from "../types/stores";

const MenuCard=({menu}:{menu:Menu})=>{
    return(
        <div className="flex items-center py-[16px] px-[24px]">
            <img className="mr-[16px] size-[54px] shrink-0" src="/thumbNail.svg" alt="thumbnail" />

            <div className="flex flex-col gap-[5px]">
                <div className="flex items-center gap-[6px]">
                    <div className="text-gray-700 text-base font-semibold font-['Pretendard']">
                        {menu.name}
                    </div>
                    {menu.isBest && <div className="text-blue-500 text-base font-semibold font-['Pretendard']">BEST</div>}
                </div>

                <div className="text-gray-500 text-xs font-medium font-['Pretendard']">
                    {menu.price.toLocaleString()}원
                </div>

                <div className="w-[180px] text-gray-500 text-xs font-medium font-['Pretendard']">
                    {menu.ingredients}
                </div>
            </div>

            <div className="ml-auto shrink-0">
                <Button children="담기" />
            </div>
        </div>
    );
};

export default MenuCard;