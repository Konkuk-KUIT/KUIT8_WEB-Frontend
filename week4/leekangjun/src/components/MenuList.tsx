import MenuCard from "./MenuCard";
import type { Menu } from "../types/stores";

interface MenuListProps {
  menus?: Menu[];
  onCartMenu: (menuId: number) => void;
}

const MenuList=({menus=[], onCartMenu}: MenuListProps)=>{
    return(
        <>
            <div className="p-[26px_0_11px_24px] text-gray-500 text-base font-semibold font-['Pretendard']">
                샐러드
            </div>

            {menus.map(menu=>(
                <MenuCard 
                    key={menu.id} 
                    menu={menu} 
                    onCartMenu={onCartMenu}    
                />
            ))}
        </>
    );
};

export default MenuList