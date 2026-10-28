import { Link } from "react-router-dom";
import type { Store } from "../types/stores";

interface StoreItemProps {
	items: Store[];
	likedStoreIds: number[];
	onToggleLike: (storeId: number) => void;
}

const StoreItem = ({
	items,
	likedStoreIds,
	onToggleLike,
}: StoreItemProps) => {
	if (items.length === 0) {
		return (
			<p className="px-6 py-10 text-center text-[15px] text-[#6b7684]">
				검색 결과가 없습니다.
			</p>
		);
	}

	return (
		<ul aria-label="가게 목록" className="mt-3 flex w-[390px] flex-col">
			{items.map(
				({
					id,
					name,
					rate,
					reviewCnt,
					minDeliveryTime,
					maxDeliveryTime,
					deliveryFee,
				}) => (
					<li
						key={id}
						className="flex w-[390px] gap-[17px] p-[16px_24px_17px_24px]"
					>
						<Link
							to={`/store/${id}`}
							className="flex min-w-0 flex-1 gap-[17px] text-inherit no-underline"
						>
							<div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

							<div className="flex min-w-0 flex-1 flex-col gap-[5px]">
								<div className="flex flex-col gap-[2px] text-[17px] font-semibold text-[#333d4b]">
									{id < 4 && <span>{id}위</span>}
									<span>{name}</span>
								</div>

								<div className="flex items-center gap-[1px] text-[13px] font-medium text-[#6b7684]">
									<img src="/graystar.svg" alt="ratestar" />
									<span>
										{rate} ({reviewCnt.toLocaleString()})
									</span>
								</div>

								<span className="text-[13px] font-medium text-[#6b7684]">
									{minDeliveryTime}분~{maxDeliveryTime}분 ∙ 배달비{" "}
									{deliveryFee.toLocaleString()}원
								</span>
							</div>
						</Link>

						<button
							type="button"
							aria-label={`${name} ${
								likedStoreIds.includes(id) ? "좋아요 취소" : "좋아요"
							}`}
							aria-pressed={likedStoreIds.includes(id)}
							onClick={() => onToggleLike(id)}
							className="shrink-0 cursor-pointer border-0 bg-transparent text-2xl text-[#f04452]"
						>
							{likedStoreIds.includes(id) ? "♥" : "♡"}
						</button>
					</li>
				),
			)}
		</ul>
	);
};

export default StoreItem;
