import { useNavigate, useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/Store/MenuItem";
import StoreInfo from "../../components/Store/StoreInfo";
import stores from "../../models/stores";
import { useCartStore } from "../../stores/useCartStore";
import type { Menu, Store as StoreType } from "../../types/stores";

interface StoreDetailProps {
	store: StoreType;
}

const StoreDetail = ({ store }: StoreDetailProps) => {
	const menus = store.menus ?? [];
	const cartStoreId = useCartStore((state) => state.storeId);
	const cartItems = useCartStore((state) => state.items);
	const addMenu = useCartStore((state) => state.addMenu);
	const replaceCart = useCartStore((state) => state.replaceCart);

	const handleAddToCart = (menu: Menu) => {
		const hasAnotherStoreCart =
			cartItems.length > 0 && cartStoreId !== store.id;

		if (hasAnotherStoreCart) {
			const shouldReplace = window.confirm(
				"다른 가게의 메뉴가 담겨 있어요. 기존 장바구니를 비우고 새 메뉴를 담을까요?",
			);

			if (!shouldReplace) {
				return;
			}

			replaceCart(store.id, menu);
			return;
		}

		addMenu(store.id, menu);
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

			<OrderBar />
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
