import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import stores from "../../models/stores";

const Cart = () => {
  const store = stores[0];
  const menus = store.menus.slice(0, 1).map((menu) => ({ ...menu, quantity: 1 }));
  const totalOrder = menus.reduce((total, menu) => total + menu.price * menu.quantity, 0);
  const finalPrice = totalOrder + store.deliveryFee;
  const isBelowMin = totalOrder < store.minDeliveryPrice;

  return (
    <main className="mt-[41px] w-[390px] pb-[180px]">
      <BackBar orderCancel />
      <div className="h-4 bg-[#F2F4F6]" />

      {/* 매장 정보 */}
      <div className="px-5 py-4 bg-white flex justify-between text-sm">
        <span className="font-semibold text-[17px] text-[#6B7684]">{store.name}</span>
        {isBelowMin && (
          <div className="flex items-center gap-1 text-[#F04452]">
            <span className="text-[15px]">최소금액 미달</span>
            <img src="/warning.svg" className="w-3 h-3" />
          </div>
        )}
      </div>

      {/* 담은 메뉴들 */}
      {menus.map((menu) => (
        <CartItem
          key={menu.id}
          item={{
            id: menu.id,
            name: menu.name,
            extra: menu.ingredients,
            quantity: menu.quantity,
            price: menu.price,
          }}
        />
      ))}

      <div className="px-5 py-4 text-[17px] text-[#3182F6] text-center font-semibold border-b-16 border-[#F2F4F6]">더 담기 +</div>

      <CartSummary totalOrder={totalOrder} deliveryFee={store.deliveryFee} finalPrice={finalPrice} minDeliveryPrice={store.minDeliveryPrice} />
    </main>
  );
};

export default Cart;
