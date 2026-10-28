import { useState } from "react";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartBar from "../../components/Cart/CartBar";
import CartPrice from "../../components/Cart/CartPrice";
import stores from "../../models/stores";
import type { CartItem } from "../../types/stores";

const Cart = () => {
	const store = stores[0];
	const [cartItems, setCartItems] = useState<CartItem[]>(() => {
		const firstMenu = store.menus?.[0];
		return firstMenu ? [{ ...firstMenu, count: 1 }] : [];
	});

	const handleIncrease = (menuId: number) => {
		setCartItems((previousItems) =>
			previousItems.map((item) =>
				item.id === menuId
					? { ...item, count: item.count + 1 }
					: item,
			),
		);
	};

	const handleDecrease = (menuId: number) => {
		setCartItems((previousItems) =>
			previousItems.map((item) =>
				item.id === menuId
					? { ...item, count: Math.max(1, item.count - 1) }
					: item,
			),
		);
	};

	const orderPrice = cartItems.reduce(
		(sum, { price, count }) => sum + price * count,
		0,
	);
	const deliveryFee = store.deliveryFee;
	const totalPrice = orderPrice + deliveryFee;
	const minDeliveryPrice = store.minDeliveryPrice;
	const isMinimumMet = orderPrice >= minDeliveryPrice;

	return (
		<main className="min-h-screen w-[390px] pt-[41px] pb-[132px]">
			<BackBar orderCancel />
			<CartBar
				store={store}
				cartItems={cartItems}
				isMinimumMet={isMinimumMet}
				onIncrease={handleIncrease}
				onDecrease={handleDecrease}
			/>

			<CartPrice
				orderPrice={orderPrice}
				deliveryFee={deliveryFee}
				totalPrice={totalPrice}
			/>

			<div className="fixed bottom-[20px] flex h-[112px] w-[390px] flex-col items-center bg-white px-[24px] pt-[17px]">
				<p className="whitespace-nowrap text-[15px] font-medium text-[#6b7684]">
					최소 주문금액 {minDeliveryPrice.toLocaleString()}원
				</p>
				<div className="mt-[13px]">
					<Button type="button" size="xl" disabled={!isMinimumMet}>
						<span className="whitespace-nowrap">
							{totalPrice.toLocaleString()}원 결제하기
						</span>
					</Button>
				</div>
			</div>
		</main>
	);
};

export default Cart;
