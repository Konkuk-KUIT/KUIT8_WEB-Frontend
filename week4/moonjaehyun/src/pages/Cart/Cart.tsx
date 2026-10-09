import BackBar from "../../components/BackBar";
import CartCheckoutBar from "../../components/CartCheckoutBar";
import CartStoreSection from "../../components/CartStoreSection";
import OrderSummary from "../../components/OrderSummary";
import stores from "../../models/stores";

const Cart = () => {
  const store = stores[0];

  // 확장 가능한 구조로 설계
  const cartItems = [
    {
      ...store.menus[0],
      quantity: 1,
      options: "추천소스, 채소볼, 베이컨추가, 시저드레싱 추가",
    },
  ];

  // item 개수만큼 동적 로딩되록 변경
  const orderPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const totalPrice = orderPrice + store.deliveryFee;

  // 최소 금액 이하인 거 판정
  const isBelowMinimum = orderPrice < store.minDeliveryPrice;

  return (
    <main className="min-h-screen w-[390px] bg-white pt-[41px] pb-[95px]">
      <BackBar orderCancel={true} />
      <div className="h-[16px] w-[390px] bg-[#f2f4f6]" />

      <CartStoreSection
        storeName={store.name}
        items={cartItems}
        isBelowMinimum={isBelowMinimum}
      />

      <div className="h-[16px] w-[390px] bg-[#f2f4f6]" />
      <div className="h-[16px] w-[390px] bg-white" />

      <OrderSummary
        orderPrice={orderPrice}
        deliveryFee={store.deliveryFee}
        totalPrice={totalPrice}
      />

      <CartCheckoutBar
        minimumOrderPrice={store.minDeliveryPrice}
        totalPrice={totalPrice}
        disabled={isBelowMinimum}
      />
    </main>
  );
};

export default Cart;
