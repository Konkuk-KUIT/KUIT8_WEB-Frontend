
import { create } from "zustand";
import type { Menu } from "../types/stores";

// 장바구니에 담긴 메뉴
interface CartItem {
  menu: Menu;
  quantity: number;
}

// 장바구니 상태와 변경 함수
interface CartState {
  storeId: number | null;
  items: CartItem[];

  addMenu: (storeId: number, menu: Menu) => void;
  increaseQuantity: (menuId: number) => void;
  decreaseQuantity: (menuId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  // 초기 상태
  storeId: null,
  items: [],

  // 메뉴 담기
  addMenu: (storeId, menu) =>
    set((state) => {
      // 다른 가게 메뉴를 담는 경우
      if (state.storeId !== null && state.storeId !== storeId) {
        return {
          storeId,
          items: [{ menu, quantity: 1 }],
        };
      }

      // 이미 담긴 메뉴인지 확인
      const existingItem = state.items.find(
        (item) => item.menu.id === menu.id
      );

      // 같은 메뉴면 수량 증가
      if (existingItem) {
        return {
          storeId,
          items: state.items.map((item) =>
            item.menu.id === menu.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // 새로운 메뉴면 추가
      return {
        storeId,
        items: [...state.items, { menu, quantity: 1 }],
      };
    }),

  // 수량 증가
  increaseQuantity: (menuId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.menu.id === menuId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // 수량 감소 (최소 1개)
  decreaseQuantity: (menuId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.menu.id === menuId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),

  // 장바구니 초기화
  clearCart: () =>
    set({
      storeId: null,
      items: [],
    }),
}));
