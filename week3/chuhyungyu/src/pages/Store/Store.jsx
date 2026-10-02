import { useParams } from 'react-router-dom';
import stores from '../../models/stores';
import BackBar from '../../components/BackBar';
import MenuItem from '../../components/MenuItem';
import OrderSummaryBar from '../../components/OrderSummaryBar';

const Store = () => {
  const subtotal = stores[0].menus[0].price;
  const { storeId } = useParams();
  const store = stores.find((item) => item.id === Number(storeId));

  if (!store) {
    return <main><BackBar /><p className="p-6 text-[#6b7684]">가게를 찾을 수 없습니다.</p></main>;
  }

  return (
    <main className="min-h-dvh w-[390px] bg-white pb-[112px] pt-[41px]">
      <BackBar />
      <section className="border-b border-[#e5e8eb] px-6 pb-3 pt-6">
        <h1 className="text-[24px] font-bold text-[#191f28]">{store.name}</h1>
        <p className="mt-1 flex items-center gap-2 text-[16px] text-[#4e5968]">
          <span role="img" aria-label="별점" className="text-[#ffd43b]">★</span>
          <strong>{store.rate.toFixed(1)}</strong>
          <span>리뷰{store.reviewCnt.toLocaleString('ko-KR')}</span>
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
                <MenuItem menu={menu} />
              </li>
            ))}
          </ul>
        ) : <p className="px-6 py-10 text-[15px] text-[#8b95a1]">등록된 메뉴가 없습니다.</p>}
      </section>
      <OrderSummaryBar totalPrice={subtotal} disabled={subtotal === 0} />
    </main>
  );
};

export default Store;


