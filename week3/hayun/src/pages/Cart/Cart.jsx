import BackBar from "../../components/BackBar";
import stores from "../../models/stores";
import OrderMenu from "../../components/OrderMenu";

const Cart = () => {
	const store = stores[0];

	const menus = [
		{
			id: 1,
			name: "토마토 샐러드",
			price: 10600,
			ingredients: "계란, 옥수수, 양파, 올리브, 베이컨, 시저드레싱",
			quantity: 1,
		},
	];

	const orderPrice = menus.reduce(
		(sum, menu) => sum + menu.price * menu.quantity,
		0,
	);

	const totalPrice = orderPrice + store.deliveryFee;

	return (
        <main className="flex flex-col mt-[41px] mb-[77px] w-[390px]">

            <BackBar orderCancel={true} />

			<div className="h-[16px] bg-[#F2F4F6]" />

			<div className="flex h-[58px] items-center">
				<span className="p-[26px_0_12px_24px] text-[17px] font-bold text-[#6B7684]">{store.name}</span>
				{orderPrice < store.minDeliveryPrice && (
					<span className="flex gap-[6px] text-[15px] text-[#F04452] font-medium ml-auto p-[27px_25px_13px_0]">
						최소금액 미달
						<img src="/warning.svg" alt="warning" />
					</span>
				)}
			</div>
			<OrderMenu menus={menus}/>

			<div className="flex h-[59px] gap-[3px] border-t border-[#E5E8EB] items-center justify-center">
				<button className="text-[17px] text-[#3182F6] font-semibold">더 담기</button>
				<img src="/plus.svg" alt="plus" />
			</div>

			<div className="h-[16px] bg-[#F2F4F6]" />

			<div className="flex flex-col gap-[18px] p-[24px_23px_10px_24px] text-[17px] text-[#8B95A1] font-medium">
				<div className="flex">
					<span>주문금액</span>
					<span className="ml-auto">{orderPrice.toLocaleString()}원</span>
				</div>
				<div className="flex">
					<span>배달요금</span>
					<span className="ml-auto">{store.deliveryFee.toLocaleString()}원</span>
				</div>
			</div>
			<div className="flex h-[54px] p-[16px_23px_18px_24px] text-[17px] text-[#4E5968]">
				<span className="font-medium">총 결제금액</span>
				<span className="ml-auto font-semibold">{totalPrice.toLocaleString()}원</span>
			</div>

			<div className="fixed bottom-[0] h-[95px] w-[390px]">
				<div className="flex flex-col items-center justify-center gap-[19px]">
					<span className="text-[17px] text-[#6B7684] font-medium">최소 주문금액 {store.minDeliveryPrice.toLocaleString()}원</span>
					<button className="flex h-[56px] w-[350px] bg-[#D0DFFB] rounded-[16px] justify-center items-center">
						<span className="text-[#FFFFFF] text-[16px] font-semibold">{totalPrice.toLocaleString()}원 결제하기</span>
					</button>
				</div>
			</div>
        </main>
	);
};

export default Cart;
