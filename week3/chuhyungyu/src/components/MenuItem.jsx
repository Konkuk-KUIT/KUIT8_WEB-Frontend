import ListRow from './ListRow';
import Button from './Button';

const MenuItem = ({ menu }) => (
  <ListRow roundImage className="min-h-[110px] items-center" trailing={<Button size="sm">담기</Button>}>
    <p className="text-[16px] font-semibold text-[#333d4b]">
      {menu.name}
      {menu.isBest && <span className="ml-2 text-[#3182f6]">BEST</span>}
    </p>
    <p className="mt-1 text-[13px] text-[#6b7684]">{menu.price.toLocaleString()}원</p>
    <p className="mt-1 text-[12px] leading-4 text-[#6b7684]">{menu.ingredients}</p>
  </ListRow>
);

export default MenuItem;


