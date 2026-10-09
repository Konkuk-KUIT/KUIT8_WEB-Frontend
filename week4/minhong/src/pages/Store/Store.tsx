import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import Menu from "../../components/Menu";
import stores from "../../models/stores";
import { useState } from "react";
import type { CartItem } from "../../type/stores";
type addedListType = {
  menus : CartItem[];
}
const Store = () => {
  const [addedList, setAddedList] = useState<addedListType>({menus : []});
  const clickHandler = (id : number)=>{
    const menu = stores[0].menus.find((m)=>m.id === id);
    if(!menu) return;
    const isAdded = addedList.menus.some((m)=>m.id === id);
    setAddedList({
      menus : isAdded
        ? addedList.menus.map((m)=>(m.id === id ? { ...m, cnt : m.cnt + 1 } : m))
        : [...addedList.menus, { ...menu, cnt : 1 }]
    })
  }
  return (
    <main className="mt-[41px] mb-[77px] w-[390px]">
      <BackBar orderCancel={false} />
      <StoreInfo store={stores[0]} />
      {stores[0].menus.map((item) => (
        <Menu key={item.id} item={item} clickHandler={clickHandler} />
      ))}
      <OrderBar addedList={addedList.menus}/>
    </main>
  );
};

export default Store;
