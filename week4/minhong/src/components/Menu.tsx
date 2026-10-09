import type { Menu as MenuType } from "../type/stores";
import Button from "./Button";

type MenuProps = {
  item : MenuType;
  clickHandler : (id : number)=>void;
};




const Menu = ({ item, clickHandler } : MenuProps) => {
  const { name, isBest, price, ingredients, id } = item;
  
  return (
    <div className="flex w-full items-center gap-3.5 py-4 pr-4 pl-6">
      <div className="size-14 shrink-0 rounded-3xl bg-gray-200" />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center gap-1.5 text-base font-semibold">
          <span className="text-gray-700">{name}</span>
          {isBest && <span className="text-blue-500">BEST</span>}
        </div>
        <p className="text-xs font-medium text-gray-500">
          {price.toLocaleString()}원
        </p>
        <p className="text-xs font-medium text-gray-500">{ingredients}</p>
      </div>
      <Button onClick={()=>clickHandler(id)} type="button" className="shrink-0">
        담기
      </Button>
    </div>
  );
};

export default Menu;
