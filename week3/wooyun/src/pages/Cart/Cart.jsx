import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartBar from "../../components/Cart/CartBar";
import CartPrice from "../../components/Cart/CartPrice";
import stores from "../../models/stores";

const Cart = () => {
	const store = stores[0];
	const menu = store.menus[0];
	const quantity = 1;
	const orderPrice = 10600;
	const deliveryFee = 2000;
	const totalPrice = 12600;
	const minDeliveryPrice = 13000;

	return (
		<main className="min-h-screen w-[390px] pt-[41px] pb-[132px]">
			<BackBar orderCancel />
			<CartBar store={store} menu={menu} quantity={quantity} />

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
					<Button type="button" size="xl">
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
