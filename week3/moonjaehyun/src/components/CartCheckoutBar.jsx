import Button from "./Button";

const CartCheckoutBar = ({
  minimumOrderPrice,
  totalPrice,
  disabled,
  onCheckout,
}) => {
  return (
    <div className="fixed bottom-0 z-30 flex h-[95px] w-[390px] flex-col items-center bg-white">
      <p className="text-center text-[17px] leading-[20px] font-medium whitespace-nowrap text-[#6b7684]">
        최소 주문금액 {minimumOrderPrice.toLocaleString()}원
      </p>
      <Button
        size="checkout"
        disabled={disabled}
        onClick={onCheckout}
        className="mt-[19px]"
      >
        {totalPrice.toLocaleString()}원 결제하기
      </Button>
    </div>
  );
};

export default CartCheckoutBar;
