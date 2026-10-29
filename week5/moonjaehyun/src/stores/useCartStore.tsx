import { create } from "zustand";

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
  quantity: number;
}

interface CartState {
  store: CartStoreInfo | null;
  menus: CartMenu[];

  addMenu: (store: CartStoreInfo, menu: CartMenu) => void;
  subMenu: (store: CartStoreInfo, menu: CartMenu) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  store: null,
  menus: [],

  addMenu: (store, menu) => {
    const currentStore = get().store;

    if (currentStore && currentStore.id !== store.id) {
      const ok = window.confirm(
        "다른 가게의 메뉴는 함께 담을 수 없습니다. 기존 장바구니를 비우고 새로 담을까요?",
      );

      if (!ok) return;

      set({
        store,
        menus: [menu],
      });

      return;
    }

    const currentMenus = get().menus;
    if (currentMenus.some((item) => item.id === menu.id)) {
      set((state) => ({
        store,
        menus: state.menus.map((item) =>
          item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      }));

      return;
    }

    set((state) => ({
      store,
      menus: [...state.menus, menu],
    }));
  },

  subMenu(menu) {
    const currentMenus = get().menus;
    if (currentMenus.some((item) => item.id === menu.id)) {
      set((state) => ({
        store: get().store,
        menus: state.menus.map((item) =>
          item.id === menu.id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item,
        ),
      }));

      return;
    }
  },

  clearCart: () => {
    set({
      store: null,
      menus: [],
    });
  },
}));
