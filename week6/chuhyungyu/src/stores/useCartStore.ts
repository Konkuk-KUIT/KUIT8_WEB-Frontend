import { create } from 'zustand';
import type { Menu } from '../types/stores';

export interface CartItem extends Menu {
  quantity: number;
}

interface CartState {
  storeId: number | null;
  items: CartItem[];
  addMenu: (storeId: number, menu: Menu) => boolean;
  replaceCart: (storeId: number, menu: Menu) => void;
  changeQuantity: (menuId: number, change: number) => void;
  clearCart: () => void;
}

export const selectSubtotal = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const useCartStore = create<CartState>()((set, get) => ({
  storeId: null,
  items: [],
  addMenu: (storeId, menu) => {
    const { storeId: currentStoreId, items } = get();
    if (items.length > 0 && currentStoreId !== storeId) {
      return false;
    }

    // 이미 담은 메뉴는 수량만 증가
    const exists = items.some((item) => item.id === menu.id);
    set({
      storeId,
      items: exists
        ? items.map((item) => item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...items, { ...menu, quantity: 1 }],
    });
    return true;
  },
  replaceCart: (storeId, menu) => set({ storeId, items: [{ ...menu, quantity: 1 }] }),
  changeQuantity: (menuId, change) => set((state) => ({
    items: state.items.map((item) => item.id === menuId
      ? { ...item, quantity: Math.max(1, item.quantity + change) }
      : item),
  })),
  clearCart: () => set({ storeId: null, items: [] }),
}));
