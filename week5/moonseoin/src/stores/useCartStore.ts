import { create } from "zustand";
import type { Menu } from "../models/stores";

type CartMenu = Menu & { quantity: number };

interface CartState {
  storeId: number | null;
  menus: CartMenu[];
  addMenu: (storeId: number, menu: Menu) => void;
  changeQuantity: (menuId: number, change: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  storeId: null,
  menus: [],
  addMenu: (storeId, menu) => {
    const cart = get();

    if (cart.storeId !== null && cart.storeId !== storeId) {
      if (!window.confirm("다른 가게의 메뉴를 담으면 장바구니가 비워집니다. 교체할까요?")) return;
      set({ storeId, menus: [{ ...menu, quantity: 1 }] });
      return;
    }

    const exists = cart.menus.some((item) => item.id === menu.id);
    set({
      storeId,
      menus: exists
        ? cart.menus.map((item) =>
            item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...cart.menus, { ...menu, quantity: 1 }],
    });
  },
  changeQuantity: (menuId, change) => {
    set((cart) => ({
      menus: cart.menus.map((menu) =>
        menu.id === menuId ? { ...menu, quantity: Math.max(1, menu.quantity + change) } : menu
      ),
    }));
  },
  clearCart: () => set({ storeId: null, menus: [] }),
}));

export default useCartStore;
