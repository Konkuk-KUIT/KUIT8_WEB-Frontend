import { create } from 'zustand';
import type { Menu } from '../types/stores';

export interface CartItem extends Menu {
  quantity: number;
}

interface CartState {
  storeId: number | null;
  items: CartItem[];
  addMenu: (storeId: number, menu: Menu, replaceCart?: boolean) => void;
  changeQuantity: (menuId: number, change: number) => void;
  clearCart: () => void;
}

export const selectSubtotal = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const useCartStore = create<CartState>()((set) => ({
  storeId: null,
  items: [],
  addMenu: (storeId, menu, replaceCart = false) => set((state) => {
    // 다른 가게면 교체 확인 후 담기
    if (state.storeId !== null && state.storeId !== storeId && state.items.length > 0) {
      return replaceCart ? { storeId, items: [{ ...menu, quantity: 1 }] } : state;
    }

    // 이미 담은 메뉴는 수량만 증가
    const exists = state.items.some((item) => item.id === menu.id);
    return {
      storeId,
      items: exists
        ? state.items.map((item) => item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...state.items, { ...menu, quantity: 1 }],
    };
  }),
  changeQuantity: (menuId, change) => set((state) => ({
    items: state.items.map((item) => item.id === menuId
      ? { ...item, quantity: Math.max(1, item.quantity + change) }
      : item),
  })),
  clearCart: () => set({ storeId: null, items: [] }),
}));
