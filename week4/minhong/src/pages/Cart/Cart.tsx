import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import OrderMenu from "../../components/OrderMenu";
import PriceRow from "../../components/PriceRow";
import PaymentBar from "../../components/PaymentBar";
import { useState, useEffect } from "react";
import type { CartItem } from "../../type/stores";
type addedListType ={
  menus : CartItem[]
}

const Cart = () => {
  const store = stores[0];
  const menu = store.menus[0];
  const [addedList, setAddedList] = useState<addedListType>({menus : [{ ...menu, cnt : 1 }]});
  const [left, setLeft] = useState(60); //1분
  const { deliveryFee, minDeliveryPrice } = store;
  const orderPrice = addedList.menus.reduce((acc, cur) => acc + cur.price * cur.cnt, 0);
  const totalPrice = orderPrice + deliveryFee;
  const isOverPrice = orderPrice >= minDeliveryPrice;

  const changeCnt = (id : number, diff : number) => {
    setAddedList({
      menus : addedList.menus.map((m) =>
        m.id === id ? { ...m, cnt : Math.max(1, m.cnt + diff) } : m
      )
    })
  }

  useEffect(()=>{
    if(left <= 0) return;
    const id = setTimeout(()=>setLeft((prev)=> prev-1), 1000);
    return ()=> clearTimeout(id);
  }, [left]);

  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  const time = mm + ":"+ss;


  return (
    <main className="w-[390px] mt-[41px] mb-[140px]">
      <BackBar orderCancel time={time}/>
      <div className="flex flex-col">
        <div className="h-4 w-full bg-gray-100" aria-hidden="true" />

        <section aria-label="주문 메뉴">
          {addedList.menus.map((item) => (
            <OrderMenu
              key={item.id}
              store={store}
              item={item}
              cnt={item.cnt}
              isOverPrice={isOverPrice}
              onIncrease={() => changeCnt(item.id, 1)}
              onDecrease={() => changeCnt(item.id, -1)}
            />
          ))}
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
          PayBtnDisable={!isOverPrice || left === 0}
        />
      </div>
    </main>
  );
};

export default Cart;
