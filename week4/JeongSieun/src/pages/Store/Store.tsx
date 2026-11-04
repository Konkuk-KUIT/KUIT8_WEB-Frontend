import { useState } from "react";
import type { Menu } from "../../types/stores";
import { useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenuItem from "../../components/StoreMenuItem";
import stores from "../../models/stores";

interface CartMenu {
	menu: Menu;
	quantity: number;
}

const Store = () => {
	const { storeId } = useParams();

	const [cart, setCart] = useState<CartMenu[]>([]);

	const store =
		stores.find((item) => item.id === Number(storeId)) ?? stores[0];

	const menus = store.menus ?? [];

	const handleAddMenu = (menu: Menu) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(item) => item.menu.id === menu.id
			);

			if (existingItem) {
				return prevCart.map((item) =>
					item.menu.id === menu.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}

			return [...prevCart, { menu, quantity: 1 }];
		});
	};

	const totalPrice = cart.reduce(
		(acc, item) => acc + item.menu.price * item.quantity,
		0
	);

	return (
		<main className="relative min-h-[1142px] w-[390px] bg-white">
			<BackBar orderCancel={false} />

			{/* 가게 상단 정보 */}
			<section className="absolute left-0 top-[88px] w-[390px]">

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
			<div className="absolute left-0 top-[282px] h-[1px] w-[390px] bg-[#e5e8eb]" />

			{/* 메뉴 */}
			<section className="absolute left-0 top-[312px] w-[390px]">
				<h2 className="px-[24px] text-[17px] font-semibold leading-[20px] text-[#6b7684]">
					샐러드
				</h2>

				<div className="mt-[15px]">
					{menus.map((menu) => (
						<StoreMenuItem
							key={menu.id}
							menu={menu}
							onAddMenu={handleAddMenu}
						/>
					))}
				</div>
			</section>

			<OrderBar totalPrice={totalPrice} />
		</main>
	);
};

export default Store;