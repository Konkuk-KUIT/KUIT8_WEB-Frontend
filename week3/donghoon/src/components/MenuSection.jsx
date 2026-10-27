import MenuItem from "./MenuItem";

const MenuSection = ({ menus }) => {
  return (
    <section className="w-[390px]">
      <h2 className="pt-[26px] pb-[11px] pl-[24px] text-[17px] font-semibold text-[#6b7684]">
        샐러드
      </h2>

      {menus.map((menu) => (
        <MenuItem key={menu.id} menu={menu} />
      ))}
    </section>
  );
};

export default MenuSection;