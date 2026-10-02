import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import OrderMenu from "../../components/OrderMenu";
import PriceRow from "../../components/PriceRow";
import PaymentBar from "../../components/PaymentBar";

const Cart = () => {
  const store = stores[0];
  const menu = store.menus[0];
  const orderPrice = menu.price;
  const { deliveryFee, minDeliveryPrice } = store;
  const totalPrice = orderPrice + deliveryFee;

  return (
    <main className="w-[390px] mt-[41px] mb-[140px]">
      <BackBar orderCancel />
      <div className="inline-flex flex-col items-start">
        <div className="w-96 h-4 bg-gray-100" aria-hidden="true" />

        <section aria-label="주문 메뉴">
          <OrderMenu store={store} item={menu} cnt={1} />
          <div className="w-96 h-14 relative border-t border-gray-200">
            <button
              type="button"
              className="left-[161px] top-[19px] absolute flex items-center gap-1.5 text-blue-500 text-base font-semibold font-['Pretendard']"
            >
              더 담기
              <span className="size-4 relative" aria-hidden="true">
                <span className="w-3 h-0 left-[2px] top-[8px] absolute outline-solid outline-[1.5px] outline-offset-[-0.75px] outline-blue-500" />
                <span className="w-3 h-0 left-[8px] top-[2px] absolute origin-top-left rotate-90 outline-solid outline-[1.5px] outline-offset-[-0.75px] outline-blue-500" />
              </span>
            </button>
          </div>
        </section>

        <div className="w-96 h-4 bg-gray-100" aria-hidden="true" />

        <dl className="h-36 text-base font-medium font-['Pretendard']">
          <PriceRow label="주문금액" price={orderPrice} />
          <PriceRow label="배달요금" price={deliveryFee} />
          <PriceRow label="총 결제금액" price={totalPrice} total />
        </dl>

        <PaymentBar
          orderPrice={orderPrice}
          totalPrice={totalPrice}
          minDeliveryPrice={minDeliveryPrice}
        />
      </div>
    </main>
  );
};

export default Cart;
