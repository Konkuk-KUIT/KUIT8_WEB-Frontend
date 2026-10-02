import Button from './Button';

const OrderSummaryBar = ({ totalPrice, disabled }) => (
  <footer className="fixed bottom-0 left-0 z-20 flex min-h-[92px] w-full max-w-[390px] items-center justify-between rounded-t-2xl bg-white px-6 py-5 shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
    <div>
      <p className="text-[13px] text-[#6b7684]">총 주문금액</p>
      <p className="mt-1 text-[17px] font-semibold text-[#4e5968]">{totalPrice.toLocaleString()}원</p>
    </div>
    <Button size="lg" disabled={disabled}>주문하기</Button>
  </footer>
);

export default OrderSummaryBar;


