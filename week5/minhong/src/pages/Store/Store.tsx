import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import Menu from "../../components/Menu";
import stores from "../../models/stores";
import { useParams, Link } from "react-router-dom";
import Button from "../../components/Button";
import { useCartStore } from "../../stores/cartStore";

const Store = () => {

  const addMenu = useCartStore((state)=>state.addMenu);
  const {storeId} = useParams();
  const store = stores.find((s)=>s.id === Number(storeId));

  if(!store){
    return (
      <main className="flex h-screen w-[390px] flex-col items-center justify-center gap-[8px] px-[24px]">
        <span className="mb-[8px] text-[56px]">🏪</span>
        <h1 className="text-[22px] font-bold text-[#191f28]">가게를 찾을 수 없어요</h1>
        <p className="text-center text-[15px] text-[#6b7684]">
          주소가 잘못되었거나 더 이상 운영하지 않는 가게예요.
        </p>
        <Link to="/store" className="mt-[24px]">
          <Button size="lg">목록으로 이동</Button>
        </Link>
      </main>
    );
  }
 
  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />
      <StoreInfo store={store} />
      {store.menus.map((item) => (
        <Menu key={item.id} item={item} clickHandler={()=>addMenu(item, store.id)} />
      ))}
      <OrderBar/>
    </main>
  );
};

export default Store;
