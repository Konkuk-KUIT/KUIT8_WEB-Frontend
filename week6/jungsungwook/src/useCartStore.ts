import { create } from "zustand";
import type { Menu } from "./models/stores";

interface CartStoreInfo {
    id: number;
    name: string;
    deliveryFee: number;
    minDeliveryPrice: number;
}

interface CartMenu {
    id: number;
    name: string;
    price: number;
    ingredients: string;
    isBest: boolean;
    quantity: number;
}

interface CartState {
    store: CartStoreInfo | null;
    menus: CartMenu[];

    addMenu: (store: CartStoreInfo, menu: Menu) => void;
    clearCart: () => void;
    increaseQuantity: (menuId: number) => void;
    decreaseQuantity: (menuId: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
    store: null,
    menus: [],

    addMenu: (store, menu) => {

        //현재 Zustand에 저장된 상태 가져오기
        const state = get();

        //다른 가게라면 교체 여부 확인
        if (state.store && state.store.id !== store.id) {
            if (!window.confirm("기존 장바구니를 교체할까요?")) {
                return;
            }

            set({
                store: store,
                menus: [{ ...menu, quantity: 1 }]
            });
            return;
        }

        //이미 담겨 있는 메뉴인지 확인
        const exists = state.menus.some(
            (item) => item.id === menu.id
        );

        //같은 메뉴라면 수량 증가
        if (exists) {
            set({
                menus: state.menus.map((item) =>
                    item.id === menu.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            });
        }

        //새로운 메뉴라면 배열에 추가
        else {
            set({
                store: store,
                menus: [...state.menus, { ...menu, quantity: 1 }]
            });
        }
    },

    clearCart: () => set({
        store: null,
        menus: []
    }),

    increaseQuantity: (menuId) => set((state) => ({
        menus: state.menus.map((menu) =>
            menu.id === menuId
                ? { ...menu, quantity: menu.quantity + 1 }
                : menu
        )
    })),

    decreaseQuantity: (menuId) => set((state) => ({
        menus: state.menus
            .map((menu) =>
                menu.id === menuId
                    ? { ...menu, quantity: menu.quantity - 1 }
                    : menu
            )
            .filter((menu) => menu.quantity > 0)
    })),
}));