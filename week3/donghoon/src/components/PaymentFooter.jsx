import Button from "./Button";

const PaymentFooter = ({
  minOrderPrice,
  totalPrice,
  disabled,
}) => {
  return (
    <footer className="fixed bottom-0 flex h-[129px] w-[390px] flex-col items-center bg-white">
        {/* 최소 주문 금액 */}
      <p className="text-[17px] font-medium text-[#6b7684]">
        최소 주문금액 {minOrderPrice.toLocaleString()}원
      </p>

        {/* 결제하기 버튼 */}
      <div className="mt-[18px]">
        <Button size="xl" disabled={disabled}>
          {totalPrice.toLocaleString()}원 결제하기
        </Button>
      </div>
    </footer>
  );
};

export default PaymentFooter;