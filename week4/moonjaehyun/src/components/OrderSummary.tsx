import OrderPrice from "./OrderPrice";

const OrderSummary = ({ orderPrice, deliveryFee, totalPrice }) => {
  return (
    <section
      className="flex h-[147px] w-[390px] flex-col bg-white"
      aria-label="결제 금액"
    >
      <OrderPrice title="주문금액" price={orderPrice} />
      <OrderPrice title="배달요금" price={deliveryFee} />
      <OrderPrice title="총 결제금액" price={totalPrice} emphasized />
    </section>
  );
};

export default OrderSummary;
