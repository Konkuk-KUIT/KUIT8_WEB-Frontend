
import { useEffect, useState } from "react";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import stores from "../../models/stores";

const Cart = () => {
	const [quantity, setQuantity] = useState<number>(1);
	const [remainingTime, setRemainingTime] = useState<number>(60);

	const store = stores[0];
	const menu = store.menus?.[0];

	// 1분 타이머
	useEffect(() => {
		if (remainingTime === 0) return;

		const timer = window.setTimeout(() => {
			setRemainingTime((prev) => Math.max(0, prev - 1));
		}, 1000);

		return () => window.clearTimeout(timer);
	}, [remainingTime]);

	// 수량 증가
	const handleIncrease = () => {
		setQuantity((prev) => prev + 1);
	};

	// 수량 감소
	const handleDecrease = () => {
		setQuantity((prev) => Math.max(1, prev - 1));
	};

	if (!menu) {
		return <div>메뉴 정보를 찾을 수 없습니다.</div>;
	}

	const orderPrice = menu.price * quantity;
	const deliveryFee = store.deliveryFee;
	const totalPrice = orderPrice + deliveryFee;

	const isMinimumOrder = orderPrice < store.minDeliveryPrice;
	const isExpired = remainingTime === 0;
	const isPaymentDisabled = isMinimumOrder || isExpired;

	const formattedTime = `${String(Math.floor(remainingTime / 60)).padStart(2, "0")}:${String(remainingTime % 60).padStart(2, "0")}`;

	return (
		<main className="relative min-h-[844px] w-[390px] bg-white pb-[150px]">
			<BackBar orderCancel={true} />

			{/* 전체 콘텐츠 */}
			<div className="pt-[88px]">

				{/* 위쪽 구분선 */}
				<div className="h-[16px] w-[390px] bg-[#f2f4f6]" />

				{/* 주문 메뉴 */}
				<div className="relative">
					<CartItem
						store={store}
						menu={menu}
						quantity={quantity}
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						orderPrice={orderPrice}
						isExpired={isExpired}
					/>

					{/* 남은 주문 시간 */}
					<div
						className={`pointer-events-none absolute left-[180px] top-[26px] text-[15px] font-medium ${
							isExpired ? "text-[#f04452]" : "text-[#6b7684]"
						}`}
					>
						{isExpired ? "시간 만료" : formattedTime}
					</div>
				</div>

				{/* 더 담기 */}
				<div className="flex h-[59px] w-[390px] items-center justify-center border-t border-[#e5e8eb]">
					<span className="text-[17px] font-semibold text-[#3182f6]">
						더 담기 ＋
					</span>
				</div>

				{/* 아래쪽 구분선 */}
				<div className="h-[16px] w-[390px] bg-[#f2f4f6]" />

				{/* 주문금액 영역 */}
				<div className="mt-[24px] w-[390px]">

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
							배달요금
						</span>
						<span className="text-[17px] text-[#505967]">
							{deliveryFee.toLocaleString()}원
						</span>
					</div>

					<div className="flex h-[54px] items-center justify-between px-[24px]">
						<span className="text-[17px] font-medium text-[#4e5968]">
							총 결제금액
						</span>
						<span className="text-[17px] font-semibold text-[#4e5968]">
							{totalPrice.toLocaleString()}원
						</span>
					</div>
				</div>
			</div>

			{/* 결제 영역 */}
			<div className="fixed bottom-0 left-0 z-30 h-[129px] w-[390px] bg-white">
				<div className="text-center text-[17px] text-[#6b7684]">
					{isMinimumOrder
						? `${store.minDeliveryPrice.toLocaleString()}원 이상 주문해주세요.`
						: `최소 주문금액 ${store.minDeliveryPrice.toLocaleString()}원`}
				</div>

				<Button
					disabled={isPaymentDisabled}
					className="absolute left-[20px] top-[39px] h-[56px] w-[350px] rounded-[16px] p-0 text-[16px]"
				>
					{totalPrice.toLocaleString()}원 결제하기
				</Button>
			</div>
		</main>
	);
};

export default Cart;
