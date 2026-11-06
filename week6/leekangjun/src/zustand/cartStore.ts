import {create} from "zustand"
import type { Store } from "../types/stores";

type CartItem = {
    storeId: number;
    menuId: number;
    quantity: number;
    price: number;
};

type CartStore = {
    items: CartItem[];
    increase: (store: Store, menuId: number) => void;
    decrease: (storeId: number, menuId: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartStore>((set)=>({
    items: [],

    increase: (store, menuId) =>
        set((state)=>{
            const storeId = store.id;
            const menu= store.menus?.find((menu)=>menu.id===menuId);

            if(!menu) return state;

            const isExist = state.items.some((item)=>
                item.storeId===storeId && item.menuId===menuId);

            if(!isExist){
                return {
                    items: [...state.items,{storeId,menuId,quantity:1,price: menu?.price}]
                };
            }

            return {
                items: state.items.map((item)=>
                item.storeId===storeId && item.menuId===menuId
                ?{...item, quantity: item.quantity+1}: item)
            };
        }),

    decrease: (storeId, menuId) => 
        set((state)=>({
            items: state.items.map((item)=>
                item.storeId===storeId && item.menuId===menuId
                ?{...item, quantity: item.quantity -1}
                : item
            ).filter((item)=>item.quantity>0)
        })),

    clearCart: ()=>
        set({items:[]})
}));

export const selectedTotalPrice = (state: CartStore):number =>
    state.items.reduce((sum,item)=>
        sum+item.price*item.quantity,0);
