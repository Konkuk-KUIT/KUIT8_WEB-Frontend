import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import CartItem from "../../components/CartItem";
import ItemPirce from "../../components/ItemPirce";
import CartOrderBar from "../../components/CartOrderBar";
import Timer from "../../components/Timer";
import { useCartStore } from "../../useCartStore";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Cart = () => {



  const cartStore = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);

  const store = stores.find(
    (item) => item.id === cartStore?.id
  );
  const [timeLeft, setTimeLeft] = useState<number>(60);


  useEffect(() => {
    // 시간이 0일때 setTimeOut이 다시 실행되는 것을 막음
    if (timeLeft == 0) {
      return;
    }
    const timerId = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timerId);
    //의존성 배열에 timeLeft를 넣어서 시간이 바뀔때마다 cleanUp이 실행되도록 함
  }, [timeLeft]);

  if (!store) {
    return null;
  }

  const menu = store.menus[0];

  if (!menu) {
    return null;
  }

  const orderPrice = menus.reduce((sum, menu) => sum + menu.price * menu.quantity, 0);

  const totalPrice = orderPrice + store.deliveryFee;
  const canOrder =
    orderPrice >= store.minDeliveryPrice &&
    menus.length > 0 &&
    timeLeft > 0;

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const navigate = useNavigate();
  const clearCart = useCartStore((state) => state.clearCart);

  const handleOrderCancel = () => {
    clearCart();
    navigate("/store");
  };




  // const quantity = 1;
  return (

    <div className="h-[844px] w-[390px]">
      <BackBar
        orderCancel={true}
        onOrderCancel={handleOrderCancel}
      />

      <div className="mt-[41px]">
        <div className="h-[16px] bg-[#F2F4F6]"></div>
      </div>

      <div className="position: absolute top-[45px] w-[390px] flex justify-center">
        <Timer timeLeft={timeLeft}></Timer>
      </div>

      {menus.map((menu) => (
        <CartItem
          key={menu.id}
          store={store}
          menu={menu}
          quantity={menu.quantity}
          canOrder={canOrder}
          timeLeft={timeLeft}
          increaseQuantity={() => increaseQuantity(menu.id)}
          decreaseQuantity={() => decreaseQuantity(menu.id)}
        />
      ))}

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