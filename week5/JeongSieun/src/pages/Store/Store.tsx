import { useCartStore } from "../../stores/useCartStore";
import type { Menu } from "../../types/stores";
import { Link, useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenuItem from "../../components/StoreMenuItem";
import stores from "../../models/stores";

const Store = () => {
	const { storeId } = useParams();

	const cartStoreId = useCartStore((state) => state.storeId);
	const addMenu = useCartStore((state) => state.addMenu);

	const store = stores.find(
		(item) => String(item.id) === storeId
	);

	const handleAddMenu = (menu: Menu) => {
		if (!store) return;

		// 다른 가게 메뉴를 담으려는 경우
		if (cartStoreId !== null && cartStoreId !== store.id) {
			const confirmed = window.confirm(
				"다른 가게의 메뉴가 이미 담겨 있습니다.\n기존 장바구니를 비우고 새 메뉴를 담을까요?"
			);

			if (!confirmed) return;
		}

		addMenu(store.id, menu);
	};


	if (!store) {
		return (
			<main className="flex min-h-screen w-[390px] flex-col items-center justify-center gap-4 bg-white">
				<h1 className="text-[22px] font-bold text-[#191f28]">
					가게를 찾을 수 없습니다.
				</h1>

				<p className="text-[15px] text-[#6b7684]">
					존재하지 않는 가게이거나 잘못된 주소입니다.
				</p>

				<Link
					to="/store"
					className="rounded-[12px] bg-[#3182f6] px-6 py-3 text-white"
				>
					가게 목록으로 돌아가기
				</Link>
			</main>
		);
	}

	return (
		<main className="relative min-h-[1142px] w-[390px] bg-white">
			<BackBar orderCancel={false} />

			{/* 가게 상단 정보 */}
			<section className="absolute left-0 top-[41px] w-[390px]">

				{/* 가게 이름 */}
				<div className="h-[59px] px-[24px] pt-[26px]">
					<h1 className="text-[26px] font-bold leading-[31px] text-[#191f28]">
						{store.name}
					</h1>
				</div>

				{/* 별점 / 리뷰 */}
				<div className="flex h-[38px] items-center px-[24px]">
					<div className="flex items-center gap-[10px]">
						<img
							src="/yellowstar.svg"
							alt="별점"
							className="h-[18px] w-[18px]"
						/>

						<span className="text-[17px] font-semibold leading-[20px] text-[#4e5968]">
							{store.rate}
						</span>

						<span className="text-[16px] font-medium leading-[20px] text-[#4e5968]">
							리뷰{store.reviewCnt.toLocaleString()}
						</span>
					</div>
				</div>

				{/* 상단 정보와 간격 */}
				<div className="h-[12px]" />

				{/* 결제 / 최소주문 / 배달시간 */}
				<div className="h-[84px]">

					{/* 결제방법 */}
					<div className="flex h-[28px] items-center px-[24px]">
						<span className="w-[64px] shrink-0 text-[15px] font-medium leading-[18px] text-[#4e5968]">
							결제방법
						</span>

						<span className="text-[15px] font-medium leading-[18px] text-[#4e5968]">
							토스결제만 현장결제 안됨
						</span>
					</div>

					{/* 최소주문 */}
					<div className="flex h-[28px] items-center px-[24px]">
						<span className="w-[64px] shrink-0 text-[15px] font-medium leading-[18px] text-[#4e5968]">
							최소주문
						</span>

						<span className="text-[15px] font-medium leading-[18px] text-[#4e5968]">
							{store.minDeliveryPrice.toLocaleString()}원
						</span>
					</div>

					{/* 배달시간 */}
					<div className="flex h-[28px] items-center px-[24px]">
						<span className="w-[64px] shrink-0 text-[15px] font-medium leading-[18px] text-[#4e5968]">
							배달시간
						</span>

						<span className="text-[15px] font-medium leading-[18px] text-[#4e5968]">
							약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
						</span>
					</div>
				</div>
			</section>

			{/* 구분선 */}
			<div className="absolute left-0 top-[235px] h-[1px] w-[390px] bg-[#e5e8eb]" />

			{/* 메뉴 */}
			<section className="absolute left-0 top-[265px] w-[390px]">
				<h2 className="px-[24px] text-[17px] font-semibold leading-[20px] text-[#6b7684]">
					샐러드
				</h2>

				<div className="mt-[15px]">
					{store.menus.map((menu) => (
						<StoreMenuItem
							key={menu.id}
							menu={menu}
							onAddMenu={handleAddMenu}
						/>
					))}
				</div>
			</section>

			<OrderBar />
		</main>
	);
};

export default Store;