import { create } from "zustand";
import type { Menu, CartMenu } from "../types/stores";

// 장바구니 상태와 변경 함수 타입
interface CartState {
  storeId: number | null;
  items: CartMenu[];

  addMenu: (storeId: number, menu: Menu) => void;
  increaseQuantity: (menuId: number) => void;
  decreaseQuantity: (menuId: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()((set) => ({
  // 초기 상태
  storeId: null,
  items: [],

  // 1. 메뉴 담기
  addMenu: (storeId, menu) =>
    set((state) => {
      // 기존 가게와 다른 가게라면 장바구니 교체
      // 확인창은 Store.tsx에서 처리
      if (state.storeId !== storeId) {
        return {
          storeId,
          items: [{ ...menu, options: "", quantity: 1 }],
        };
      }

      // 같은 메뉴가 이미 담겨 있는지 검사
      const existing = state.items.find(
        (item) => item.id === menu.id
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === menu.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // 처음 담는 메뉴라면 추가
      return {
        items: [
          ...state.items,
          { ...menu, options: "", quantity: 1 },
        ],
      };
    }),

  // 2. 수량 증가
  increaseQuantity: (menuId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === menuId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    })),

  // 3. 수량 감소 (최소 1개 유지)
  decreaseQuantity: (menuId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === menuId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),

  // 4. 장바구니 초기화
  clearCart: () =>
    set({
      storeId: null,
      items: [],
    }),
}));