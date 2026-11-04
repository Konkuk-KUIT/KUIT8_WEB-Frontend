type CartOrderBarProps = {
  totalPrice: number;
  minDeliveryPrice: number;
  canOrder: boolean;
};

const CartOrderBar = ({
  totalPrice,
  minDeliveryPrice,
  canOrder,
}: CartOrderBarProps) => {
  return (
    <div className="fixed bottom-[0px] flex w-[390px] flex-col items-center">
      <div className="text-center text-base font-medium text-gray-500">
        최소 주문금액 {minDeliveryPrice.toLocaleString()}원
      </div>

      <button
        disabled={!canOrder}
        className="mt-[19px] flex h-[56px] w-[350px] items-center justify-center rounded-2xl bg-[#D0DFFB] text-base font-semibold text-white"
      >
        {totalPrice.toLocaleString()}원 결제하기
      </button>
    </div>
  );
};

export default CartOrderBar;