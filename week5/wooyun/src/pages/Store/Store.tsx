import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/Store/MenuItem";
import StoreInfo from "../../components/Store/StoreInfo";
import stores from "../../models/stores";
import type { CartItem, Menu } from "../../types/stores";

const getCartStorageKey = (storeId: number) =>
	`wooyun-cart-items:${storeId}`;

const loadCartItems = (storeId: number): CartItem[] => {
	try {
		const savedCart = localStorage.getItem(getCartStorageKey(storeId));
		const parsedCart: unknown = savedCart ? JSON.parse(savedCart) : [];
		return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
	} catch {
		return [];
	}
};

const Store = () => {
	const { storeId } = useParams();
	const store =
		stores.find(({ id }) => id === Number(storeId)) ?? stores[0];
	const menus = store.menus ?? [];
	const [cartItems, setCartItems] = useState<CartItem[]>(() =>
		loadCartItems(store.id),
	);

	useEffect(() => {
		try {
			localStorage.setItem(
				getCartStorageKey(store.id),
				JSON.stringify(cartItems),
			);
		} catch {
			// Storage를 사용할 수 없는 환경에서도 장바구니 기능은 계속 동작한다.
		}
	}, [cartItems, store.id]);

	const handleAddToCart = (menu: Menu) => {
		setCartItems((previousItems) => {
			const existMenu = previousItems.find(({ id }) => id === menu.id);

			if (!existMenu) {
				return [...previousItems, { ...menu, count: 1 }];
			}

			return previousItems.map((item) =>
				item.id === menu.id
					? { ...item, count: item.count + 1 }
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
