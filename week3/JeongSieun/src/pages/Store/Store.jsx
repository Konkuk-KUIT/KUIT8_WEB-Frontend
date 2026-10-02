import { useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenuItem from "../../components/StoreMenuItem";
import stores from "../../models/stores";

const Store = () => {
	const { storeId } = useParams();

	const store = stores.find((item) => item.id === Number(storeId)) ?? stores[0];

	const menus = store.menus ?? [];

	return (
		<main className="relative min-h-[1142px] w-[390px] bg-white">
			<BackBar orderCancel={false} />

			<section className="absolute left-0 top-[88px] w-[390px]">
				<div className="h-[59px] px-[24px] pt-[26px]">
					<h1 className="text-[26px] font-bold leading-[31px] text-[#191f28]">
						{store.name}
					</h1>
				</div>

				<div className="h-[38px]">
					<div className="flex items-center gap-[10px] px-[24px]">
						<img
							src="/yellowstar.svg"
							alt="별점"
							className="h-[18px] w-[18px]"
						/>

						<span className="text-[17px] font-semibold text-[#4e5968]">
							{store.rate}
						</span>

						<span className="text-[16px] font-medium text-[#4e5968]">
							리뷰{store.reviewCnt.toLocaleString()}
						</span>
					</div>
				</div>

				<div className="flex h-[28px] items-center px-[24px]">
					<span className="w-[64px] text-[15px] font-medium text-[#4e5968]">
						결제방법
					</span>

					<span className="text-[15px] font-medium text-[#4e5968]">
						토스결제만 현장결제 안됨
					</span>
				</div>

				<div className="flex h-[28px] items-center px-[24px]">
					<span className="w-[64px] text-[15px] font-medium text-[#4e5968]">
						최소주문
					</span>

					<span className="text-[15px] font-medium text-[#4e5968]">
						{store.minDeliveryPrice.toLocaleString()}원
					</span>
				</div>

				<div className="flex h-[41px] items-center px-[24px]">
					<span className="w-[64px] text-[15px] font-medium text-[#4e5968]">
						배달시간
					</span>

					<span className="text-[15px] font-medium text-[#4e5968]">
						약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
					</span>
				</div>
			</section>

			<div className="absolute left-0 top-[282px] h-[1px] w-[390px] bg-[#e5e8eb]" />

			<section className="absolute left-0 top-[304px] w-[390px]">
				<h2 className="px-[24px] text-[17px] font-semibold text-[#6b7684]">
					샐러드
				</h2>

				<div className="mt-[15px]">
					{menus.map((menu) => (
						<StoreMenuItem key={menu.id} menu={menu} />
					))}
				</div>
			</section>

			<OrderBar />
		</main>
	);
};

export default Store;