import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Menu } from "../types/stores";

interface CartStoreState {
	storeId: number | null;
	items: CartItem[];
	addMenu: (storeId: number, menu: Menu) => void;
	replaceCart: (storeId: number, menu: Menu) => void;
	increaseMenu: (menuId: number) => void;
	decreaseMenu: (menuId: number) => void;
	clearCart: () => void;
}

export const useCartStore = create<CartStoreState>()(
	persist(
		(set) => ({
			storeId: null,
			items: [],
			addMenu: (storeId, menu) => {
				set((state) => {
					if (
						state.items.length > 0 &&
						state.storeId !== storeId
					) {
						return state;
					}

					const existingMenu = state.items.find(
						({ id }) => id === menu.id,
					);
					const items = existingMenu
						? state.items.map((item) =>
								item.id === menu.id
									? { ...item, count: item.count + 1 }
									: item,
							)
						: [...state.items, { ...menu, count: 1 }];

					return { storeId, items };
				});
			},
			replaceCart: (storeId, menu) => {
				set({ storeId, items: [{ ...menu, count: 1 }] });
			},
			increaseMenu: (menuId) => {
				set((state) => ({
					items: state.items.map((item) =>
						item.id === menuId
							? { ...item, count: item.count + 1 }
							: item,
					),
				}));
			},
			decreaseMenu: (menuId) => {
				set((state) => ({
					items: state.items.map((item) =>
						item.id === menuId
							? { ...item, count: Math.max(1, item.count - 1) }
							: item,
					),
				}));
			},
			clearCart: () => {
				set({ storeId: null, items: [] });
			},
		}),
		{
			name: "wooyun-cart-store",
			partialize: ({ storeId, items }) => ({ storeId, items }),
		},
	),
);

export const selectMenuTotal = (state: CartStoreState) =>
	state.items.reduce(
		(total, { price, count }) => total + price * count,
		0,
	);
