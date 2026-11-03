import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import CartItem from "../../components/CartItem";
import ItemPirce from "../../components/ItemPirce";
import CartOrderBar from "../../components/CartOrderBar";
import Timer from "../../components/Timer";

import { useEffect, useState } from "react";


const Cart = () => {




  const store = stores[0];

  //state는 항상 같은 순서로 호출되어야해서 맨 위에서 선언하였습니다
  const [quantity, setQuantity] = useState<number>(1);
  const [timeLeft, setTimeLeft] = useState<number>(60);

  if (!store) {
    return null;
  }

  const menu = store.menus[0];

  if (!menu) {
    return null;
  }

  const orderPrice = menu.price * quantity;
  const totalPrice = orderPrice + store.deliveryFee;
  const canOrder = (orderPrice - store.deliveryFee >= store.minDeliveryPrice) && (timeLeft > 0);


  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => prev - 1);
  }

  

  useEffect(() => {
    // 시간이 0일때 setTimeOut이 다시 실행되는 것을 막음
    if (timeLeft == 0) {
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(prev => prev-1);
    }, 1000);

    return () => clearTimeout(timerId);
    //의존성 배열에 timeLeft를 넣어서 시간이 바뀔때마다 cleanUp이 실행되도록 함
  }, [timeLeft]);



  // const quantity = 1;



  return (

    <div className="h-[844px] w-[390px]">
      <BackBar orderCancel={true} />

      <div className="mt-[41px]">
        <div className="h-[16px] bg-[#F2F4F6]"></div>
      </div>

      <div className="position: absolute top-[45px] w-[390px] flex justify-center">
        <Timer timeLeft={timeLeft}></Timer>
      </div>

      <CartItem
        store={store}
        menu={menu}
        quantity={quantity}
        canOrder={canOrder}
        timeLeft={timeLeft}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
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