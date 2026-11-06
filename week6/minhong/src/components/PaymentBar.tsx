import Button from "./Button";
type PaymentBarProps = {
  totalPrice : number;
  minDeliveryPrice : number;
  PayBtnDisable : boolean
  HandleOrder? : ()=>void;
}

const PaymentBar = ({ totalPrice, minDeliveryPrice , PayBtnDisable, HandleOrder}: PaymentBarProps) => {
  return (
    <section
      aria-label="결제"
      className="fixed bottom-0 z-10 flex w-97.5 flex-col items-center gap-4.75 bg-white px-6 pt-6 pb-4"
    >
      <p className="text-gray-500 text-[15px] font-medium">
        최소 주문금액 {minDeliveryPrice.toLocaleString()}원
      </p>
      <Button
        size="xl"
        type="button"
        className="w-full px-0 whitespace-nowrap"
        disabled={PayBtnDisable}
        onClick={HandleOrder}
      >
        {totalPrice.toLocaleString()}원 결제하기
      </Button>
    </section>
  );
};

export default PaymentBar;
