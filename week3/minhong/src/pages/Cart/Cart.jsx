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
  const isOverPrice = totalPrice >= minDeliveryPrice;

  return (
    <main className="w-[390px] mt-[41px] mb-[140px]">
      <BackBar orderCancel />
      <div className="flex flex-col">
        <div className="h-4 w-full bg-gray-100" aria-hidden="true" />

        <section aria-label="주문 메뉴">
          <OrderMenu
            store={store}
            item={menu}
            cnt={1}
            isOverPrice={isOverPrice}
          />
          <div className="flex h-14 w-full items-center justify-center border-t border-gray-200">
            <button
              type="button"
              className="flex items-center gap-1.5 text-base font-semibold text-blue-500"
            >
              더 담기
              <span
                className="grid size-4 place-items-center"
                aria-hidden="true"
              >
                <span className="col-start-1 row-start-1 h-[1.5px] w-3 bg-blue-500" />
                <span className="col-start-1 row-start-1 h-[1.5px] w-3 rotate-90 bg-blue-500" />
              </span>
            </button>
          </div>
        </section>

        <div className="h-4 w-full bg-gray-100" aria-hidden="true" />

        <dl className="text-base font-medium">
          <PriceRow label="주문금액" price={orderPrice} />
          <PriceRow label="배달요금" price={deliveryFee} />
          <PriceRow label="총 결제금액" price={totalPrice} total />
        </dl>

        <PaymentBar
          totalPrice={totalPrice}
          minDeliveryPrice={minDeliveryPrice}
          isOverPrice={isOverPrice}
        />
      </div>
    </main>
  );
};

export default Cart;
