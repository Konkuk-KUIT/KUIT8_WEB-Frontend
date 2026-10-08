import BackBar from "../../components/BackBar";
import AddMoreButton from "../../components/cart/AddMoreButton";
import CartItem from "../../components/cart/CartItem";
import CartStoreHeader from "../../components/cart/CartStoreHeader";
import PaymentBar from "../../components/cart/PaymentBar";
import PriceSummary from "../../components/cart/PriceSummary";
import cart from "../../models/cart";
import stores from "../../models/stores";

const Cart = () => {
	const store = stores.find(({ id }) => id === cart.storeId);
	const cartItems = cart.items.map(({ menuId, quantity, options }) => {
		const menu = store.menus.find(({ id }) => id === menuId);
		return {
			id: menuId,
			name: menu.name,
			options,
			quantity,
			price: menu.price * quantity,
		};
	});

	// 아래 값들은 담긴 메뉴와 가게 정보에서 계산되므로 따로 저장하지 않는다.
	const orderPrice = cartItems.reduce((sum, { price }) => sum + price, 0);
	const totalPrice = orderPrice + store.deliveryFee;
	const isBelowMinOrder = orderPrice < store.minDeliveryPrice;

	return (
		<main className="mt-[41px] mb-[129px] w-[390px]">
			<BackBar orderCancel />
			<div className="h-[16px] bg-[#f2f4f6]" />

			<section>
				<CartStoreHeader name={store.name} isBelowMinOrder={isBelowMinOrder} />
				<ul className="mt-[12px]">
					{cartItems.map(({ id, name, options, price, quantity }) => (
						<li key={id}>
							<CartItem
								name={name}
								options={options}
								price={price}
								quantity={quantity}
							/>
						</li>
					))}
				</ul>
				<AddMoreButton />
			</section>

			<div className="h-[16px] bg-[#f2f4f6]" />
			<PriceSummary
				orderPrice={orderPrice}
				deliveryFee={store.deliveryFee}
				totalPrice={totalPrice}
			/>

			<PaymentBar
				totalPrice={totalPrice}
				minOrderPrice={store.minDeliveryPrice}
				isBelowMinOrder={isBelowMinOrder}
			/>
		</main>
	);
};

export default Cart;
