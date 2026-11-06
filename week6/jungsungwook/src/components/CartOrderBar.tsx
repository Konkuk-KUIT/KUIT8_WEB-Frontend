

type CartOrderBarProps = {
  totalPrice: number;
  minDeliveryPrice: number;
  canOrder: boolean;
  isSubmitting: boolean;
  onOrder: () => void;
};

const CartOrderBar = ({
  totalPrice,
  minDeliveryPrice,
  canOrder,
  isSubmitting,
  onOrder,
}: CartOrderBarProps) => {
  return (
    <div className="fixed bottom-[0px] flex w-[390px] flex-col items-center">
      <div className="text-center text-base font-medium text-gray-500">
        최소 주문금액 {minDeliveryPrice.toLocaleString()}원
      </div>

      <button type="button" onClick={onOrder}
        disabled = {!canOrder || isSubmitting}
        aria-busy={isSubmitting}
        className="disabled:bg-[#D0DFFB] enabled:bg-[#3182F6] mt-[19px] flex h-[56px] w-[350px] items-center justify-center rounded-2xl  text-base font-semibold text-white"
      >
        {isSubmitting ? "주문 요청 중..." : `${totalPrice.toLocaleString()}원 결제하기`}
      </button>
    </div>
  );
};


export default CartOrderBar;
