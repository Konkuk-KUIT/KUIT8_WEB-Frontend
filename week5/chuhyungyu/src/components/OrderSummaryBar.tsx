import Button from './Button';

interface OrderSummaryBarProps {
  totalPrice: number;
  disabled: boolean;
  onOrder: () => void;
}

const OrderSummaryBar = ({ totalPrice, disabled, onOrder }: OrderSummaryBarProps) => (
  <footer className="fixed bottom-0 z-20 flex min-h-[77px] w-full max-w-[390px] items-center justify-between rounded-t-2xl bg-white px-6 py-4 shadow-[0_-8px_16px_rgba(0,0,0,0.1)]">
    <div>
      <p className="text-[15px] text-[#6b7684]">총 주문금액</p>
      <p aria-live="polite" className="mt-1 text-[17px] font-semibold text-[#4e5968]">{totalPrice.toLocaleString()}원</p>
    </div>
    <Button size="lg" disabled={disabled} onClick={onOrder}>주문하기</Button>
  </footer>
);

export default OrderSummaryBar;


