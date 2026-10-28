import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import OrderMenu from "../../components/OrderMenu";
import PriceRow from "../../components/PriceRow";
import PaymentBar from "../../components/PaymentBar";
import { useNavigate } from "react-router-dom";
import { useCartStore, getOrderPrice } from "../../stores/cartStore";
import useCountdown from "../../hooks/useCountdown";


const Cart = () => {
  const nav = useNavigate();
  const menus = useCartStore((state)=>state.menus);
  const changeCnt = useCartStore((state)=>state.changeCnt);
  const { time, isOver } = useCountdown(60); //1분

  const store = stores.find((s)=>s.id === menus[0]?.storeId);
  if(!store){
    return (
      <main className="w-[390px] mt-[41px]">
        <BackBar />
        <p className="py-20 text-center text-base font-medium text-gray-500">장바구니가 비어있어요</p>
        <PaymentBar totalPrice={0} minDeliveryPrice={0} PayBtnDisable />
      </main>
    );
  }

  const { deliveryFee, minDeliveryPrice } = store;
  const orderPrice = getOrderPrice(menus);
  const totalPrice = orderPrice + deliveryFee;
  const isOverPrice = orderPrice >= minDeliveryPrice;


  return (
    <main className="w-[390px] mt-[41px] mb-[140px]">
      <BackBar orderCancel time={time}/>
      <div className="flex flex-col">
        <div className="h-4 w-full bg-gray-100" aria-hidden="true" />

        <section aria-label="주문 메뉴">
          <div className="flex items-center justify-between px-6 pt-6.5">
            <h2 className="text-base font-bold text-gray-500">{store.name}</h2>
            {!isOverPrice && (
              <p className="flex items-center gap-1 text-base font-medium text-rose-500">
                최소금액 미달
                <img src="/Warning.svg" alt="경고" className="size-5" />
              </p>
            )}
          </div>
          {menus.map((item) => (
            <OrderMenu
              key={item.id}
              item={item}
              cnt={item.cnt}
              onIncrease={() => changeCnt(item.id, 1)}
              onDecrease={() => changeCnt(item.id, -1)}
            />
          ))}
          <div className="flex h-14 w-full items-center justify-center border-t border-gray-200">
            <button
              type="button"
              onClick={() => nav(`/store/${store.id}`)}
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
          PayBtnDisable={!isOverPrice || isOver}
        />
      </div>
    </main>
  );
};

export default Cart;
