import Button from "./Button";

interface PaymentFooterProps {
  minOrderPrice: number;
  totalPrice: number;
  disabled: boolean;

  // 6주차 추가
  isSubmitting: boolean;
  onPayment: () => void;
}

const PaymentFooter = ({
  minOrderPrice,
  totalPrice,
  disabled,
  isSubmitting,
  onPayment,
}: PaymentFooterProps) => {
  return (
    <footer className="fixed bottom-0 flex h-[129px] w-[390px] flex-col items-center bg-white">
      <p className="text-[17px] font-medium text-[#6b7684]">
        최소 주문금액 {minOrderPrice.toLocaleString()}원
      </p>

      <div className="mt-[18px]">
        <Button
          size="xl"
          disabled={disabled}
          // 실제 결제 요청을 받기 위함 - 6주차
          onClick={onPayment}
        >
          {isSubmitting
            ? "주문 요청 중..."
            : `${totalPrice.toLocaleString()}원 결제하기`}
        </Button>
      </div>
    </footer>
  );
};

export default PaymentFooter;
