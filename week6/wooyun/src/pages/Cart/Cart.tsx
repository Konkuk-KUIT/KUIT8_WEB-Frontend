import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder, OrderApiError } from "../../api/orders";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartBar from "../../components/Cart/CartBar";
import CartPrice from "../../components/Cart/CartPrice";
import stores from "../../models/stores";
import {
	selectMenuTotal,
	useCartStore,
} from "../../stores/useCartStore";

const ORDER_LIMIT_SECONDS = 60;
const ORDER_DEADLINE_STORAGE_KEY = "wooyun-order-deadline";

const createOrderDeadline = () => {
	const deadline = Date.now() + ORDER_LIMIT_SECONDS * 1000;

	try {
		localStorage.setItem(ORDER_DEADLINE_STORAGE_KEY, String(deadline));
	} catch {
		// Storage 사용이 제한된 환경에서는 현재 페이지에서만 타이머를 유지합니다.
	}

	return deadline;
};

const loadOrderDeadline = () => {
	try {
		const savedDeadline = Number(
			localStorage.getItem(ORDER_DEADLINE_STORAGE_KEY),
		);

		return savedDeadline > 0 ? savedDeadline : createOrderDeadline();
	} catch {
		return Date.now() + ORDER_LIMIT_SECONDS * 1000;
	}
};

const calculateRemainingSeconds = (deadline: number) =>
	Math.max(0, Math.ceil((deadline - Date.now()) / 1000));

const clearOrderDeadline = () => {
	try {
		localStorage.removeItem(ORDER_DEADLINE_STORAGE_KEY);
	} catch {
		// Storage를 사용할 수 없어도 주문 완료와 화면 이동은 계속 진행한다.
	}
};

const Cart = () => {
	const navigate = useNavigate();
	const storeId = useCartStore((state) => state.storeId);
	const cartItems = useCartStore((state) => state.items);
	const orderPrice = useCartStore(selectMenuTotal);
	const increaseMenu = useCartStore((state) => state.increaseMenu);
	const decreaseMenu = useCartStore((state) => state.decreaseMenu);
	const clearCart = useCartStore((state) => state.clearCart);
	const store = stores.find(({ id }) => id === storeId);
	const [orderDeadline] = useState(loadOrderDeadline);
	const [remainingSeconds, setRemainingSeconds] = useState(() =>
		calculateRemainingSeconds(orderDeadline),
	);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		const timerId = window.setInterval(() => {
			const nextRemainingSeconds = calculateRemainingSeconds(orderDeadline);
			setRemainingSeconds(nextRemainingSeconds);

			if (nextRemainingSeconds === 0) {
				window.clearInterval(timerId);
			}
		}, 1000);

		return () => window.clearInterval(timerId);
	}, [orderDeadline]);

	const handleCancelOrder = () => {
		clearCart();
		clearOrderDeadline();
		navigate("/store");
	};

	const handleAddMore = () => {
		navigate(storeId === null ? "/store" : `/store/${storeId}`);
	};

	const deliveryFee = store?.deliveryFee ?? 0;
	const totalPrice = orderPrice + deliveryFee;
	const minDeliveryPrice = store?.minDeliveryPrice ?? 0;
	const isMinimumMet =
		store !== undefined &&
		cartItems.length > 0 &&
		orderPrice >= minDeliveryPrice;
	const isExpired = remainingSeconds === 0;
	const formattedTime = `${String(Math.floor(remainingSeconds / 60)).padStart(
		2,
		"0",
	)}:${String(remainingSeconds % 60).padStart(2, "0")}`;

	const handleOrder = async () => {
		if (
			storeId === null ||
			cartItems.length === 0 ||
			isExpired ||
			isSubmitting
		) {
			return;
		}

		setIsSubmitting(true);

		try {
			const orderResponse = await createOrder({
				storeId,
				items: cartItems.map(({ id, count }) => ({
					menuId: id,
					quantity: count,
				})),
			});
			window.alert(
				`주문이 완료되었습니다.\n결제금액 ${orderResponse.totalPrice.toLocaleString()}원`,
			);
			clearCart();
			clearOrderDeadline();
			navigate("/");
		} catch (requestError) {
			if (
				requestError instanceof OrderApiError &&
				requestError.status === 400 &&
				requestError.code === "MINIMUM_ORDER_NOT_MET"
			) {
				window.alert(requestError.message);
			} else {
				window.alert("주문 요청에 실패했습니다. 잠시 후 다시 시도해 주세요.");
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className="min-h-screen w-[390px] pt-[41px] pb-[132px]">
			<BackBar
				orderCancel
				onOrderCancel={handleCancelOrder}
			/>
			<div className="flex h-10 items-center bg-white px-6">
				<p
					className={`text-left text-[15px] font-semibold ${
						isExpired ? "text-[#f04452]" : "text-[#3182f6]"
					}`}
					aria-live="polite"
				>
					{isExpired
						? "주문 시간이 만료되었어요"
						: `남은 주문 시간 ${formattedTime}`}
				</p>
			</div>
			<CartBar
				store={store}
				cartItems={cartItems}
				isMinimumMet={isMinimumMet}
				onIncrease={increaseMenu}
				onDecrease={decreaseMenu}
				onAddMore={handleAddMore}
			/>

			<CartPrice
				orderPrice={orderPrice}
				deliveryFee={deliveryFee}
				totalPrice={totalPrice}
			/>

			<div className="fixed bottom-[20px] flex h-[112px] w-[390px] flex-col items-center bg-white px-[24px] pt-[12px]">
				<p className="whitespace-nowrap text-[15px] font-medium text-[#6b7684]">
					최소 주문금액 {minDeliveryPrice.toLocaleString()}원
				</p>
				<div className="mt-[10px]">
					<Button
						type="button"
						size="xl"
						disabled={
							cartItems.length === 0 || isExpired || isSubmitting
						}
						onClick={() => void handleOrder()}
					>
						<span className="whitespace-nowrap">
							{isSubmitting
								? "주문 요청 중..."
								: `${totalPrice.toLocaleString()}원 결제하기`}
						</span>
					</Button>
				</div>
			</div>
		</main>
	);
};

export default Cart;
