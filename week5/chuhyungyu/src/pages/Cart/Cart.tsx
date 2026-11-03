import stores from '../../models/stores';
import BackBar from '../../components/BackBar';
import CartItem from '../../components/CartItem';
import PriceSummary from '../../components/PriceSummary';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { selectSubtotal, useCartStore } from '../../stores/useCartStore';

const Cart = () => {
  const navigate = useNavigate();
  const storeId = useCartStore((state) => state.storeId);
  const menus = useCartStore((state) => state.items);
  const handleQuantity = useCartStore((state) => state.changeQuantity);
  const subtotal = useCartStore(selectSubtotal);
  const store = stores.find((item) => item.id === storeId);
  const isEmpty = !store || menus.length === 0;
  const [remainingSeconds, setRemainingSeconds] = useState(60);
  const isExpired = remainingSeconds === 0;

  // 1분 주문 제한
  useEffect(() => {
    if (isExpired) return;
    const timer = window.setInterval(() => {
      setRemainingSeconds((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isExpired]);

  // 최소 주문금액은 배달비 제외
  const belowMinimum = subtotal < (store?.minDeliveryPrice ?? 0);
  const deliveryFee = isEmpty ? 0 : store.deliveryFee;
  const total = subtotal + deliveryFee;
  const isPaymentDisabled = belowMinimum || isExpired || isEmpty;
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');

  return (
    <main className="flex min-h-dvh w-full flex-col bg-[#f2f4f6] pt-[41px]">
      <BackBar orderCancel backTo={store ? `/store/${store.id}` : '/store'} />
      <section className="mt-4 bg-white">
        <div className="flex items-center justify-between gap-2 px-6 pb-2 pt-6">
          <h1 className="text-[17px] font-semibold text-[#6b7684]">{store?.name ?? '장바구니'}</h1>
          {belowMinimum && <span className="text-[13px] text-[#ff3b4e]">최소금액 미달 ⓘ</span>}
        </div>
        {!isEmpty && <div className="flex items-center justify-between px-6 pb-2 text-[13px]">
          <span className="text-[#6b7684]">남은 주문 시간</span>
          <span role="timer" aria-label="남은 주문 시간" className={`font-semibold tabular-nums ${isExpired ? 'text-[#f04452]' : 'text-[#3182f6]'}`}>
            {minutes}:{seconds}
          </span>
        </div>}
        {isExpired && !isEmpty && <p role="alert" className="mx-6 mb-2 rounded-lg bg-[#fff0f1] px-3 py-3 text-[13px] text-[#f04452]">주문 시간이 만료되었습니다. 주문서를 다시 열어주세요.</p>}
        {isEmpty && <div className="px-6 py-12 text-center">
          <p className="text-[17px] font-semibold">장바구니가 비어 있습니다.</p>
          <p className="mt-2 text-[14px] text-[#6b7684]">가게를 선택하고 먹고 싶은 메뉴를 담아보세요.</p>
          <Link to="/store" className="mt-5 inline-block font-semibold text-[#3182f6]">가게 목록으로 이동</Link>
        </div>}
        {menus.map((menu) => (
          <CartItem key={menu.id} menu={menu} quantity={menu.quantity} onIncrease={() => handleQuantity(menu.id, 1)} onDecrease={() => handleQuantity(menu.id, -1)} />
        ))}
        {!isEmpty && <button type="button" onClick={() => navigate(`/store/${store.id}`)} className="block w-full cursor-pointer border-t border-[#e5e8eb] py-4 text-center text-[17px] font-semibold text-[#3182f6]">더 담기 +</button>}
      </section>
      <section aria-label="주문금액 및 결제" className="mt-4 flex flex-1 flex-col bg-white">
        <PriceSummary subtotal={subtotal} deliveryFee={deliveryFee} />
        <div className="mt-auto px-5 pb-8 pt-16">
          <p className="mb-4 text-center text-[15px] font-medium text-[#6b7684]">
            {store ? `최소 주문금액 ${store.minDeliveryPrice.toLocaleString()}원` : '메뉴를 담으면 결제할 수 있어요'}
          </p>
          <Button size="xl" disabled={isPaymentDisabled}>
            {total.toLocaleString()}원 결제하기
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Cart;


