const PriceSummary = ({
  orderPrice,
  deliveryFee,
  totalPrice,
}) => {
  return (
    <section className="w-[390px] bg-white">
      {/* 회색바 아래 흰색 여백 */}
      <div className="h-[16px]" />

      {/* 주문금액 */}
      <div className="flex h-[38px] items-center justify-between pr-[23px] pl-[24px]">
        <span className="text-[17px] font-medium text-[#8b95a1]">
          주문금액
        </span>

        <span className="text-[17px] font-medium text-[#505967]">
          {orderPrice.toLocaleString()}원
        </span>
      </div>

      {/* 배달요금 */}
      <div className="flex h-[38px] items-center justify-between pr-[23px] pl-[24px]">
        <span className="text-[17px] font-medium text-[#8b95a1]">
          배달요금
        </span>

        <span className="text-[17px] font-medium text-[#505967]">
          {deliveryFee.toLocaleString()}원
        </span>
      </div>

      {/* 총 결제금액 */}
      <div className="flex h-[54px] items-center justify-between pr-[23px] pl-[24px]">
        <span className="text-[17px] font-semibold text-[#4e5968]">
          총 결제금액
        </span>

        <span className="text-[17px] font-semibold text-[#4e5968]">
          {totalPrice.toLocaleString()}원
        </span>
      </div>
    </section>
  );
};

export default PriceSummary;