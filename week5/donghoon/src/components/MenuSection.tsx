
import MenuItem from "./MenuItem";
import type { Menu } from "../types/stores";

interface MenuSectionProps {
  menus: Menu[];
  onAddMenu: (menu: Menu) => void;
}

const MenuSection = ({
  menus,
  onAddMenu,
}: MenuSectionProps) => {
  return (
    <section className="w-[390px]">
      <h2 className="pt-[26px] pb-[11px] pl-[24px] text-[17px] font-semibold text-[#6b7684]">
        샐러드
      </h2>

      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          onAddMenu={onAddMenu}
        />
      ))}
    </section>
  );
};

export default MenuSection;
