import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import Meun from "../../components/Meun";
import stores from "../../models/stores";

const Store = () => {
  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />
      <StoreInfo store={stores[0]} />
      {stores[0].menus.map((item) => (
        <Meun key={item.id} item={item} />
      ))}
      <OrderBar />
    </main>
  );
};

export default Store;
