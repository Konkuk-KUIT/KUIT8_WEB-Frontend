import { useEffect, useState } from "react";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/Store/MenuItem";
import StoreInfo from "../../components/Store/StoreInfo";
import stores from "../../models/stores";
import type { CartItem, Menu } from "../../types/stores";

interface StoredCartItem {
	menuId: number;
	quantity: number;
}

const getCartStorageKey = (storeId: number) => `wooyun-cart:${storeId}`;

const isStoredCartItems = (value: unknown): value is StoredCartItem[] => {
	if (!Array.isArray(value)) {
		return false;
	}

	return value.every((item) => {
		if (typeof item !== "object" || item === null) {
			return false;
		}

		const candidate = item as Record<string, unknown>;
		return (
			typeof candidate.menuId === "number" &&
			Number.isInteger(candidate.menuId) &&
			typeof candidate.quantity === "number" &&
			Number.isInteger(candidate.quantity) &&
			candidate.quantity > 0
		);
	});
};

const loadCartItems = (menus: Menu[], storeId: number): CartItem[] => {
	try {
		const savedCart = localStorage.getItem(getCartStorageKey(storeId));

		if (!savedCart) {
			return [];
		}

		const parsedCart: unknown = JSON.parse(savedCart);

		if (!isStoredCartItems(parsedCart)) {
			return [];
		}

		return parsedCart.flatMap(({ menuId, quantity }) => {
			const menu = menus.find(({ id }) => id === menuId);
			return menu ? [{ ...menu, quantity }] : [];
		});
	} catch {
		return [];
	}
};

const Store = () => {
	const store = stores[0];
	const menus = store.menus ?? [];
	const [cartItems, setCartItems] = useState<CartItem[]>(() =>
		loadCartItems(menus, store.id),
	);

	useEffect(() => {
		const storedCart: StoredCartItem[] = cartItems.map(
			({ id, quantity }) => ({ menuId: id, quantity }),
		);

		try {
			localStorage.setItem(
				getCartStorageKey(store.id),
				JSON.stringify(storedCart),
			);
		} catch {
			// Storage 사용이 제한된 환경에서는 현재 화면의 상태만 유지합니다.
		}
	}, [cartItems, store.id]);

	const handleAddToCart = (menu: Menu) => {
		setCartItems((previousItems) => {
			const isAlreadyAdded = previousItems.some(({ id }) => id === menu.id);

			if (!isAlreadyAdded) {
				return [...previousItems, { ...menu, quantity: 1 }];
			}

			return previousItems.map((item) =>
				item.id === menu.id
					? { ...item, quantity: item.quantity + 1 }
					: item,
			);
		});
	};

	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo store={store} />

			<section className="pt-[26px]">
				<h2 className="pl-6 text-[17px] font-semibold text-[#6b7684]">
					샐러드
				</h2>

				<ul className="mt-[11px] flex flex-col">
					{menus.map((menu) => (
						<MenuItem
							key={menu.id}
							menu={menu}
							onAddToCart={handleAddToCart}
						/>
					))}
				</ul>
			</section>

			<OrderBar cartItems={cartItems} />
		</main>
	);
};

export default Store;
