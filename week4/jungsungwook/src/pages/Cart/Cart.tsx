import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import CartItem from "../../components/CartItem";
import ItemPirce from "../../components/ItemPirce";
import CartOrderBar from "../../components/CartOrderBar";

const Cart = () => {
  const store = stores[0];

  if (!store) {
    return null;
  }

  const menu = store.menus[0];

  if (!menu) {
    return null;
  }

  const quantity = 1;

  const orderPrice = menu.price * quantity;
  const totalPrice = orderPrice + store.deliveryFee;
  const canOrder = orderPrice >= store.minDeliveryPrice;

  return (
    <div className="h-[844px] w-[390px]">
      <BackBar orderCancel={true} />

      <div className="mt-[41px]">
        <div className="h-[16px] bg-[#F2F4F6]"></div>
      </div>

      <CartItem
        store={store}
        menu={menu}
        quantity={quantity}
        canOrder={canOrder}
      />

      <div className="flex h-[59px] items-center justify-center border-t border-[#E5E8EB]">
        <button className="text-base font-semibold text-[#3182F6]">
          더 담기 +
        </button>
      </div>

      <div className="mt-[41px]">
        <div className="h-[16px] bg-[#F2F4F6]"></div>
      </div>

      <ItemPirce
        orderPrice={orderPrice}
        deliveryFee={store.deliveryFee}
        totalPrice={totalPrice}
      />

      <CartOrderBar
        totalPrice={totalPrice}
        minDeliveryPrice={store.minDeliveryPrice}
        canOrder={canOrder}
      />
    </div>
  );
};

export default Cart;