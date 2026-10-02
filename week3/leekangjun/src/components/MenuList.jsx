import MenuCard from "./MenuCard";

const MenuList=({menus})=>{
    return(
        <>
            <div className="p-[26px_0_11px_24px] text-gray-500 text-base font-semibold font-['Pretendard']">
                샐러드
            </div>

            {menus.map(menu=>(
                <MenuCard key={menu.id} menu={menu} />
            ))}
        </>
    );
};

export default MenuList