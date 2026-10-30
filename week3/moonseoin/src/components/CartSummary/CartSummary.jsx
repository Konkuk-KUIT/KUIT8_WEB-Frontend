import Button from "../Button";

const CartSummary = ({ totalOrder, deliveryFee, finalPrice, minDeliveryPrice }) => {
  const isBelowMin = totalOrder < minDeliveryPrice;

  return (
    <>
      <div className="px-5 py-5">
        <div className="space-y-2 ">
          <div className="flex justify-between">
            <span className="text-[15px] text-[#8B95A1]">주문금액</span>
            <span className="text-[15px] text-[#505967]">{totalOrder.toLocaleString()}원</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[15px] text-[#8B95A1]">배달요금</span>
            <span className="text-[15px] text-[#505967]">{deliveryFee.toLocaleString()}원</span>
          </div>

          <div className="flex justify-between font-semibold mt-2">
            <span className="text-[15px] text-[#4E5968]">총 결제금액</span>
            <span className="text-[15px] text-[#4E5968]">{finalPrice.toLocaleString()}원</span>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-[390px] bg-white px-5 py-5">
        <div className="text-center text-[#6B7684] text-sm mt-3 mb-3">최소 주문금액 {minDeliveryPrice.toLocaleString()}원</div>

        <Button disabled={isBelowMin} size="xl">
          {finalPrice.toLocaleString()}원 결제하기
        </Button>
      </div>
    </>
  );
};

export default CartSummary;
