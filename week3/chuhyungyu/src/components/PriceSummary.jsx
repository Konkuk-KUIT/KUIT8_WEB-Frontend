
const PriceSummary = ({ subtotal, deliveryFee }) => (
  <dl className="flex flex-col gap-4 px-6 pt-6 text-[17px]">
    <div className="flex justify-between text-[#8b95a1]">
      <dt>주문금액</dt>
      <dd className="font-medium text-[#4e5968]">{subtotal.toLocaleString()}원</dd>
    </div>
    <div className="flex justify-between text-[#8b95a1]">
      <dt>배달요금</dt>
      <dd className="font-medium text-[#4e5968]">{deliveryFee.toLocaleString()}원</dd>
    </div>
    <div className="mt-2 flex justify-between font-semibold text-[#4e5968]">
      <dt>총 결제금액</dt>
      <dd>{(subtotal + deliveryFee).toLocaleString()}원</dd>
    </div>
  </dl>
);

export default PriceSummary;


