import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import stores from "../../models/stores";

const Cart = () => {
	const store = stores[0];
	const menu = store.menus[0];

	const orderPrice = menu.price;
	const deliveryFee = store.deliveryFee;
	const totalPrice = orderPrice + deliveryFee;
	const isMinimumOrder = orderPrice < store.minDeliveryPrice;

	return (
		<main className="relative min-h-[844px] w-[390px] bg-white">
			<BackBar orderCancel={true} />

			{/* list_order */}
			<div className="absolute left-0 top-[88px] flex h-[422px] w-[390px] flex-col">
				{/* 위쪽 구분선 */}
				<div className="h-[16px] w-[390px] shrink-0 bg-[#f2f4f6]" />

				{/* 주문 메뉴 */}
				<CartItem store={store} menu={menu} />

				{/* 더 담기 */}
				<div className="flex h-[59px] w-[390px] shrink-0 items-center justify-center border-t border-[#e5e8eb]">
					<span className="text-[17px] font-semibold text-[#3182f6]">
						더 담기 ＋
					</span>
				</div>

				{/* 아래쪽 구분선 */}
				<div className="h-[16px] w-[390px] shrink-0 bg-[#f2f4f6]" />
			</div>

			{/* 주문 금액 */}
			<div className="absolute left-0 top-[510px] w-[390px]">
				<div className="flex h-[38px] items-center justify-between px-[24px]">
					<span className="text-[17px] text-[#8b95a1]">
						주문금액
					</span>

					<span className="text-[17px] text-[#505967]">
						{orderPrice.toLocaleString()}원
					</span>
				</div>

				<div className="flex h-[38px] items-center justify-between px-[24px]">
					<span className="text-[17px] text-[#8b95a1]">
						배달비
					</span>

					<span className="text-[17px] text-[#505967]">
						{deliveryFee.toLocaleString()}원
					</span>
				</div>

				<div className="flex h-[54px] items-center justify-between px-[24px]">
					<span className="text-[17px] font-medium text-[#4e5968]">
						총 금액
					</span>

					<span className="text-[17px] font-semibold text-[#4e5968]">
						{totalPrice.toLocaleString()}원
					</span>
				</div>
			</div>

			{/* 결제 버튼 */}
			<div className="fixed bottom-0 left-0 h-[129px] w-[390px] bg-white">
				<div className="text-center text-[17px] text-[#6b7684]">
					{isMinimumOrder
						? `${store.minDeliveryPrice.toLocaleString()}원 이상 주문해주세요.`
						: ""}
				</div>

				<Button
					disabled={isMinimumOrder}
					className="absolute left-[20px] top-[39px] h-[56px] w-[350px] rounded-[16px] p-0 text-[16px]"
				>
					{totalPrice.toLocaleString()}원 결제하기
				</Button>
			</div>
		</main>
	);
};

export default Cart;