import stores from '../../models/stores';
import BackBar from '../../components/BackBar';
import CartItem from '../../components/CartItem';
import PriceSummary from '../../components/PriceSummary';
import Button from '../../components/Button';

const Cart = () => {
  const store = stores[0];
  const menu = store.menus[0];
  const quantity = 1;
  const subtotal = menu.price * quantity;
  const belowMinimum = subtotal < store.minDeliveryPrice;
  const deliveryFee = store.deliveryFee;
  const total = subtotal + deliveryFee;

  return (
    <main className="flex min-h-dvh w-[390px] flex-col bg-[#f2f4f6] pt-[41px]">
      <BackBar orderCancel />
      <section className="bg-white">
        <div className="flex items-center justify-between px-6 pb-2 pt-6">
          <h1 className="text-[17px] font-semibold text-[#6b7684]">{store.name}</h1>
          {belowMinimum && <span className="text-[13px] text-[#ff3b4e]">최소금액 미달 ⓘ</span>}
        </div>
        <CartItem menu={menu} quantity={quantity} />
        <button type="button" className="block w-full border-t border-[#e5e8eb] py-4 text-center text-[17px] font-semibold text-[#3182f6]">더 담기 +</button>
      </section>
      <section aria-label="주문금액 및 결제" className="mt-4 flex flex-1 flex-col bg-white">
        <PriceSummary subtotal={subtotal} deliveryFee={deliveryFee} />
        <div className="mt-auto px-5 pb-8 pt-40">
          <p className="mb-4 text-center text-[15px] font-medium text-[#6b7684]">
            최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원
          </p>
          <Button disabled={belowMinimum} className="w-full rounded-2xl border-0 bg-[#3182f6] py-[18px] text-base font-medium text-white disabled:bg-[#d0dffb]">
            {total.toLocaleString()}원 결제하기
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Cart;


