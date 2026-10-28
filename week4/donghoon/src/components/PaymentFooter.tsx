import Button from "./Button";

interface PaymentFooterProps {
  minOrderPrice: number;
  totalPrice: number;
  disabled: boolean;
}

//결제 버튼 Props 타입 추가
//이번엔 시간 만료 여부도 파악하기 위해 disabled 추가
const PaymentFooter = ({
  minOrderPrice,
  totalPrice,
  disabled,
}: PaymentFooterProps) => {
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