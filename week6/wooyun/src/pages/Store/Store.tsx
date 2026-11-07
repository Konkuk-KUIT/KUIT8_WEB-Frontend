import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStore, StoreApiError } from "../../api/stores";
import BackBar from "../../components/BackBar";
import Button from "../../components/Button";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuItem from "../../components/Store/MenuItem";
import StoreInfo from "../../components/Store/StoreInfo";
import { useCartStore } from "../../stores/useCartStore";
import type { Menu, StoreMenuResponse } from "../../types/stores";

interface StoreDetailProps {
	store: StoreMenuResponse;
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

interface StoreStatusProps {
	title: string;
	description: string;
	onRetry?: () => void;
}

const StoreStatus = ({ title, description, onRetry }: StoreStatusProps) => {
	const navigate = useNavigate();

	return (
		<main className="min-h-screen w-[390px] pt-[41px]">
			<BackBar orderCancel={false} />
			<section className="flex flex-col items-center px-6 pt-40 text-center">
				<h1 className="text-[22px] font-bold text-[#191f28]">{title}</h1>
				<p className="mt-3 text-[15px] font-medium text-[#6b7684]">
					{description}
				</p>
				<div className="mt-6 flex gap-2">
					{onRetry && (
						<Button type="button" onClick={onRetry}>
							다시 시도
						</Button>
					)}
					<Button type="button" onClick={() => navigate("/store")}>
						가게 목록으로 이동
					</Button>
				</div>
			</section>
		</main>
	);
};

const Store = () => {
	const { storeId } = useParams();
	const [requestState, setRequestState] = useState<
		| {
				requestKey: string;
				status: "success";
				store: StoreMenuResponse;
		  }
		| { requestKey: string; status: "error"; error: unknown }
		| null
	>(null);
	const [retryCount, setRetryCount] = useState(0);
	const requestKey = `${storeId ?? ""}:${retryCount}`;

	useEffect(() => {
		if (!storeId) {
			return;
		}

		const controller = new AbortController();

		void getStore(storeId, controller.signal)
			.then((storeResponse) => {
				setRequestState({
					requestKey,
					status: "success",
					store: storeResponse,
				});
			})
			.catch((requestError: unknown) => {
				if (
					requestError instanceof DOMException &&
					requestError.name === "AbortError"
				) {
					return;
				}

				setRequestState({
					requestKey,
					status: "error",
					error: requestError,
				});
			});

		return () => controller.abort();
	}, [requestKey, storeId]);

	if (!storeId) {
		return (
			<StoreStatus
				title="가게를 찾을 수 없어요"
				description="존재하지 않거나 잘못된 가게 주소예요."
			/>
		);
	}

	if (!requestState || requestState.requestKey !== requestKey) {
		return (
			<main className="min-h-screen w-[390px] pt-[41px]">
				<BackBar orderCancel={false} />
				<section
					className="flex flex-col items-center px-6 pt-40 text-center"
					role="status"
				>
					<div className="h-8 w-8 animate-spin rounded-full border-4 border-[#d0dffb] border-t-[#3182f6]" />
					<p className="mt-4 text-[15px] font-medium text-[#6b7684]">
						가게 정보를 불러오는 중이에요.
					</p>
				</section>
			</main>
		);
	}

	if (
		requestState.status === "error" &&
		requestState.error instanceof StoreApiError &&
		requestState.error.status === 404 &&
		requestState.error.code === "STORE_NOT_FOUND"
	) {
		return (
			<StoreStatus
				title="가게를 찾을 수 없어요"
				description="존재하지 않거나 잘못된 가게 주소예요."
			/>
		);
	}

	if (requestState.status === "error") {
		return (
			<StoreStatus
				title="가게 정보를 불러오지 못했어요"
				description="잠시 후 다시 시도해 주세요."
				onRetry={() => setRetryCount((count) => count + 1)}
			/>
		);
	}

	return (
		<StoreDetail key={requestState.store.id} store={requestState.store} />
	);
};

export default Store;
