import { Link, useParams } from 'react-router-dom';
import stores from '../../models/stores';
import BackBar from '../../components/BackBar';
import MenuItem from '../../components/MenuItem';
import OrderBar from '../../components/OrderBar/OrderBar';
import { useCartStore } from '../../stores/useCartStore';
import type { Menu } from '../../types/stores';

const Store = () => {
  const { storeId } = useParams();
  const cartStoreId = useCartStore((state) => state.storeId);
  const items = useCartStore((state) => state.items);
  const addMenu = useCartStore((state) => state.addMenu);
  const store = storeId && /^\d+$/.test(storeId)
    ? stores.find((item) => item.id === Number(storeId))
    : undefined;
  // 현재 가게에 담긴 수량만 표시
  const selectedMenus = store?.id === cartStoreId ? items : [];

  const handleAdd = (menu: Menu) => {
    if (!store) return;
    const needsReplacement = items.length > 0 && cartStoreId !== store.id;
    if (needsReplacement && !window.confirm('다른 가게의 메뉴가 담겨 있습니다. 기존 장바구니를 비우고 새 메뉴를 담을까요?')) return;
    addMenu(store.id, menu, needsReplacement);
  };

  if (!store) {
    return (
      <main className="min-h-dvh pt-[41px]">
        <BackBar />
        <div className="px-6 py-16 text-center">
          <h1 className="text-xl font-semibold">가게를 찾을 수 없습니다.</h1>
          <p className="mt-3 text-[15px] text-[#6b7684]">주소를 확인하거나 가게 목록에서 다시 선택해주세요.</p>
          <Link to="/store" className="mt-6 inline-block rounded-lg bg-[#3182f6] px-5 py-3 text-white">가게 목록으로 이동</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh w-full bg-white pb-[112px] pt-[41px]">
      <BackBar />
      <section className="border-b border-[#e5e8eb] px-6 pb-6 pt-6">
        <h1 className="text-[24px] font-bold text-[#191f28]">{store.name}</h1>
        <p className="mt-1 flex items-center gap-2 text-[16px] text-[#4e5968]">
          <span role="img" aria-label="별점" className="text-[#ffd43b]">★</span>
          <strong>{store.rate.toFixed(1)}</strong>
          <span>리뷰 {store.reviewCnt.toLocaleString('ko-KR')}</span>
        </p>
        <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-[14px] text-[#4e5968]">
          <dt>결제방법</dt><dd>토스결제만 현장결제 안됨</dd>
          <dt>최소주문</dt><dd>{store.minDeliveryPrice.toLocaleString()}원</dd>
          <dt>배달시간</dt><dd>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</dd>
        </dl>
      </section>
      <section>
        <h2 className="px-6 pb-2 pt-6 text-[16px] font-semibold text-[#6b7684]">샐러드</h2>
        {store.menus?.length ? (
          <ul>
            {store.menus.map((menu) => (
              <li key={menu.id}>
                <MenuItem menu={menu} quantity={selectedMenus.find((item) => item.id === menu.id)?.quantity ?? 0} onAdd={handleAdd} />
              </li>
            ))}
          </ul>
        ) : <p className="px-6 py-10 text-[15px] text-[#8b95a1]">등록된 메뉴가 없습니다.</p>}
      </section>
      <OrderBar />
    </main>
  );
};

export default Store;


