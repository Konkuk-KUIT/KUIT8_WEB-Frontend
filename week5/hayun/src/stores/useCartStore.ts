import { create } from "zustand";
import type { Menu } from "../types/stores.ts";
import stores from "../models/stores";

type orderMenu = Menu & {
    quantity: number;
};

type CartStore = {
    storeId: number | null;
    orderList: orderMenu[];

    addToCart: (menu: Menu, storeId?: number) => void;
    removeToCart: (menuId: number) => void;
    resetCart: () => void;
    calcOrderPrice: () => number;
    calcTotalPrice: () => number;
};

export const useCartStore = create<CartStore>()((set, get) => ({
    storeId: null,
    orderList: [],

    addToCart: (menu, storeId) => {
        set((state) => {
            if (state.storeId !== null && state.storeId !== storeId) {
                // 물어보기
                return {

                };
            };

            const exists = state.orderList.some((item) => item.id === menu.id);
            
            return {
                storeId,
                orderList: exists
                ? state.orderList.map((item) =>
                    item.id === menu.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
                )
                : [...state.orderList, { ...menu, quantity: 1 }],
            };
        });
    },


    removeToCart: (menuId) => {
        set((state) => ({
            orderList: state.orderList
                .filter((menu) => !(menu.id === menuId && menu.quantity === 1))
                .map((menu) =>
                    menu.id === menuId
                ? { ...menu, quantity: menu.quantity - 1 }
                : menu,
            ),
        }));
    },


    resetCart: () => {
        set({
            storeId: null,
            orderList: [],
        })
    },


    calcOrderPrice: () => 
        get().orderList.reduce(
		    (sum, menu) => sum + menu.price * menu.quantity,
		0,
	),


    calcTotalPrice: () => {
        const state = get();
        const store = stores.find((store) => store.id === state.storeId);

        return state.calcOrderPrice() + (store?.deliveryFee ?? 0);
    },
}));