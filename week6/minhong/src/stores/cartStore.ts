import {create} from 'zustand';
import type { CartItem, Menu } from '../type/stores';

type CartState = {
    menus : CartItem[];
    addMenu : (menu : Menu, storeId : number) => void;
    changeCnt : (id: number, num : number) => void;
    clear : ()=> void;
}

export const getOrderPrice = (menus : CartItem[]) =>
    menus.reduce((acc, cur) => acc + cur.price * cur.cnt, 0);

export const useCartStore = create<CartState>((set, get)=>({
    menus : [],

    addMenu : (menu, storeId)=>{
        const { menus } = get();
        const isDifferentStore = menus.some((m)=>m.storeId !== storeId);
        if(isDifferentStore){
            if(!confirm("다른 가게 메뉴가 있어요. 비우고 담을까요?")) return;
            set({menus : [{...menu, cnt : 1, storeId}]});
            return;
        }
        const isAdded = menus.some((m)=>m.id === menu.id);
        set({
            menus : isAdded ?
            menus.map((m)=>(m.id === menu.id ? {...m, cnt:m.cnt+1}: m))
            : [...menus, {...menu, cnt:1, storeId : storeId}],
        });
    },
    changeCnt : (id, num)=> set((state)=>({
        menus : state.menus.map((m)=>m.id === id ? {...m, cnt : m.cnt+num} : m),
    })),
    

    clear: () => set({ menus: [] }),
}));
