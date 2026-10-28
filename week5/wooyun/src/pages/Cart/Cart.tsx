import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import CartBar from "../../components/Cart/CartBar";
import CartPrice from "../../components/Cart/CartPrice";
import stores from "../../models/stores";
import type { CartItem } from "../../types/stores";

const ORDER_LIMIT_SECONDS = 60;
const ORDER_DEADLINE_STORAGE_KEY = "wooyun-order-deadline";
const ACTIVE_STORE_ID_STORAGE_KEY = "wooyun-active-store-id";
const getCartStorageKey = (storeId: number) =>
	`wooyun-cart-items:${storeId}`;

const loadActiveStore = () => {
	try {
		const savedStoreId = Number(
			localStorage.getItem(ACTIVE_STORE_ID_STORAGE_KEY),
		);

		return (
			stores.find(({ id }) => id === savedStoreId) ?? stores[0]
		);
	} catch {
		return stores[0];
	}
};

const loadCartItems = (storeId: number): CartItem[] => {
	try {
		const savedCart = localStorage.getItem(getCartStorageKey(storeId));
		const parsedCart: unknown = savedCart ? JSON.parse(savedCart) : [];
		return Array.isArray(parsedCart) ? (parsedCart as CartItem[]) : [];
	} catch {
		return [];
	}
};

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

const Cart = () => {
	const navigate = useNavigate();
	const [store] = useState(loadActiveStore);
	const [cartItems, setCartItems] = useState<CartItem[]>(() =>
		loadCartItems(store.id),
	);
	const [orderDeadline] = useState(loadOrderDeadline);
	const [remainingSeconds, setRemainingSeconds] = useState(() =>
		calculateRemainingSeconds(orderDeadline),
	);

	useEffect(() => {
		try {
			localStorage.setItem(
				getCartStorageKey(store.id),
				JSON.stringify(cartItems),
			);
		} catch {
			// Storage를 사용할 수 없는 환경에서도 수량 변경은 계속 동작한다.
		}
	}, [cartItems, store.id]);

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

	const handleIncrease = (menuId: number) => {
		setCartItems((previousItems) =>
			previousItems.map((item) =>
				item.id === menuId
					? { ...item, count: item.count + 1 }
					: item,
			),
		);
	};

	const handleCancelOrder = () => {
		try {
			localStorage.removeItem(ORDER_DEADLINE_STORAGE_KEY);
			localStorage.removeItem(ACTIVE_STORE_ID_STORAGE_KEY);
			stores.forEach(({ id }) => {
				localStorage.removeItem(getCartStorageKey(id));
			});
		} catch {
			// Storage를 사용할 수 없어도 주문취소와 화면 이동은 계속 진행한다.
		}

		navigate("/store");
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
	const isExpired = remainingSeconds === 0;
	const formattedTime = `${String(Math.floor(remainingSeconds / 60)).padStart(
		2,
		"0",
	)}:${String(remainingSeconds % 60).padStart(2, "0")}`;

	return (
		<main className="min-h-screen w-[390px] pt-[41px] pb-[162px]">
			<BackBar
				orderCancel
				onOrderCancel={handleCancelOrder}
			/>
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

			<div className="fixed bottom-[20px] flex h-[142px] w-[390px] flex-col items-center bg-white px-[24px] pt-[12px]">
				<p
					className={`whitespace-nowrap text-[15px] font-semibold ${
						isExpired ? "text-[#f04452]" : "text-[#3182f6]"
					}`}
					aria-live="polite"
				>
					{isExpired
						? "주문 시간이 만료되었어요"
						: `남은 주문 시간 ${formattedTime}`}
				</p>
				<p className="whitespace-nowrap text-[15px] font-medium text-[#6b7684]">
					최소 주문금액 {minDeliveryPrice.toLocaleString()}원
				</p>
				<div className="mt-[10px]">
					<Button
						type="button"
						size="xl"
						disabled={!isMinimumMet || isExpired}
					>
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
