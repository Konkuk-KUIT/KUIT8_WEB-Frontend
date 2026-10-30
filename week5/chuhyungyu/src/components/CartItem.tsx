import ListRow from './ListRow';
import type { Menu } from '../types/stores';

interface CartItemProps {
  menu: Menu;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItem = ({ menu, quantity, onIncrease, onDecrease }: CartItemProps) => (
  <ListRow className="items-center py-5">
    <p className="text-[17px] font-semibold text-[#333d4b]">{menu.name}</p>
    <p className="mt-1 text-[13px] leading-[18px] text-[#6b7684]">{menu.ingredients}</p>
    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
      <p className="text-[13px] font-medium text-[#4e5968]">{(menu.price * quantity).toLocaleString()}원</p>
      <div className="flex items-center gap-2">
        <button type="button" onClick={onDecrease} disabled={quantity <= 1} aria-label={`${menu.name} 수량 감소`} className="quantity-button">−</button>
        <span className="min-w-7 text-center text-[14px] text-[#4e5968]">{quantity}개</span>
        <button type="button" onClick={onIncrease} aria-label={`${menu.name} 수량 증가`} className="quantity-button">+</button>
      </div>
    </div>
  </ListRow>
);

export default CartItem;


