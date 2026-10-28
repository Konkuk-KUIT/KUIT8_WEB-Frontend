import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/Store/MenuItem";
import StoreInfo from "../../components/Store/StoreInfo";
import stores from "../../models/stores";
import type {
	CartItem,
	Menu,
	Store as StoreType,
} from "../../types/stores";

const getCartStorageKey = (storeId: number) =>
	`wooyun-cart-items:${storeId}`;
const ACTIVE_STORE_ID_STORAGE_KEY = "wooyun-active-store-id";

const loadCartItems = (storeId: number): CartItem[] => {
	try {
		const savedCart = localStorage.getItem(getCartStorageKey(storeId));
		const parsedCart: unknown = savedCart ? JSON.parse(savedCart) : [];
		return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
	} catch {
		return [];
	}
};

interface StoreDetailProps {
	store: StoreType;
}

const StoreDetail = ({ store }: StoreDetailProps) => {
	const navigate = useNavigate();
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

	const handleOrder = () => {
		try {
			localStorage.setItem(
				ACTIVE_STORE_ID_STORAGE_KEY,
				String(store.id),
			);
		} catch {
			// Storage를 사용할 수 없어도 주문서 이동은 계속 진행한다.
		}

		navigate("/cart");
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

			<OrderBar cartItems={cartItems} onOrder={handleOrder} />
		</main>
	);
};

const Store = () => {
	const { storeId } = useParams();
	const navigate = useNavigate();
	const parsedStoreId = Number(storeId);
	const store = Number.isInteger(parsedStoreId)
		? stores.find(({ id }) => id === parsedStoreId)
		: undefined;

	if (!store) {
		return (
			<main className="min-h-screen w-[390px] pt-[41px]">
				<BackBar orderCancel={false} />
				<section className="flex flex-col items-center px-6 pt-40 text-center">
					<h1 className="text-[22px] font-bold text-[#191f28]">
						가게를 찾을 수 없어요
					</h1>
					<p className="mt-3 text-[15px] font-medium text-[#6b7684]">
						존재하지 않거나 잘못된 가게 주소예요.
					</p>
					<div className="mt-6">
						<Button type="button" onClick={() => navigate("/store")}>
							가게 목록으로 이동
						</Button>
					</div>
				</section>
			</main>
		);
	}

	return <StoreDetail key={store.id} store={store} />;
};

export default Store;
