type ItemPriceProps = {
  orderPrice: number;
  deliveryFee: number;
  totalPrice: number;
};

const ItemPirce = ({
  orderPrice,
  deliveryFee,
  totalPrice,
}: ItemPriceProps) => {
  return (
    <div>
      <div className="mt-[16px]"></div>

      {/* 주문금액 */}
      <div className="flex justify-between px-[24px] py-[8px]">
        <span className="text-base font-medium text-gray-400">
          주문금액
        </span>

        <span className="text-base font-medium text-gray-600">
          {orderPrice.toLocaleString()}원
        </span>
      </div>

      {/* 배달요금 */}
      <div className="flex justify-between px-[24px] py-[8px]">
        <span className="text-base font-medium text-gray-400">
          배달요금
        </span>

        <span className="text-base font-medium text-gray-600">
          {deliveryFee.toLocaleString()}원
        </span>
      </div>

      {/* 총 결제금액 */}
      <div className="flex justify-between px-[24px] py-[18px]">
        <span className="text-base font-medium text-gray-600">
          총 결제금액
        </span>

        <span className="text-base font-medium text-gray-600">
          {totalPrice.toLocaleString()}원
        </span>
      </div>

      <div className="mb-[17px]"></div>
    </div>
  );
};

export default ItemPirce;