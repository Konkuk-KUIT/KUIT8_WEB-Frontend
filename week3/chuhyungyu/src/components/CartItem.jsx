import ListRow from './ListRow';

const CartItem = ({ menu, quantity }) => (
  <ListRow className="py-5" trailing={
    <div className="flex items-center gap-4 text-[13px] text-[#6b7684]">
      <span>{quantity}개</span>
      <span aria-hidden="true" className="text-xl">›</span>
    </div>
  }>
    <p className="text-[17px] font-semibold text-[#333d4b]">{menu.name}</p>
    <p className="mt-1 text-[13px] leading-[18px] text-[#6b7684]">{menu.ingredients}</p>
    <p className="mt-1 text-[13px] text-[#6b7684]">{(menu.price * quantity).toLocaleString()}원</p>
  </ListRow>
);

export default CartItem;


