import ListRow from './ListRow';
import Button from './Button';
import type { Menu } from '../types/stores';

interface MenuItemProps {
  menu: Menu;
  quantity: number;
  onAdd: (menu: Menu) => void;
}

const MenuItem = ({ menu, quantity, onAdd }: MenuItemProps) => (
  <ListRow roundImage className="min-h-[110px] items-center gap-3" trailing={
    <div className="flex flex-col items-center gap-1">
      <Button size="sm" aria-label={`${menu.name} 담기`} onClick={() => onAdd(menu)}>담기</Button>
      {quantity > 0 && <span className="text-[12px] text-[#3182f6]">{quantity}개 담음</span>}
    </div>
  }>
    <p className="text-[17px] font-semibold text-[#333d4b]">
      {menu.name}
      {menu.isBest && <span className="ml-2 text-[#3182f6]">BEST</span>}
    </p>
    <p className="mt-1 text-[13px] text-[#6b7684]">{menu.price.toLocaleString()}원</p>
    <p className="mt-1 text-[13px] leading-[18px] text-[#6b7684]">{menu.ingredients}</p>
  </ListRow>
);

export default MenuItem;


