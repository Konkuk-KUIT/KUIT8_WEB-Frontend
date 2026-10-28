import type { CartItem, Store } from "../../types/stores";

interface CartBarProps {
	store: Store;
	cartItems: CartItem[];
	isMinimumMet: boolean;
	onIncrease: (menuId: number) => void;
	onDecrease: (menuId: number) => void;
}

const CartBar = ({
	store,
	cartItems,
	isMinimumMet,
	onIncrease,
	onDecrease,
}: CartBarProps) => {
	return (
		<section className="border-y-[16px] border-[#F2F4F6] bg-white pt-[27px]">
			<div className="px-[24px]">
				<div className="flex items-center justify-between">
					<h1 className="text-[17px] font-bold text-[#6B7684]">
						{store.name}
					</h1>
					<span
						className={`text-[15px] font-medium ${
							isMinimumMet ? "text-[#3182f6]" : "text-[#f04452]"
						}`}
					>
						{isMinimumMet ? "최소금액 충족" : "최소금액 미달 ⓘ"}
					</span>
				</div>

				{cartItems.map((item) => (
					<div
						key={item.id}
						className="mt-7 flex items-center gap-4 border-b-[1px] border-[#f2f4f6] pb-4"
					>
						<div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

						<div className="min-w-0 flex-1">
							<h2 className="text-[17px] font-bold text-[#333d4b]">
								{item.name}
							</h2>
							<p className="mt-1.25 line-clamp-2 text-[13px] font-medium leading-[18px] text-[#6b7684]">
								{item.ingredients}
							</p>
							<p className="mt-1.25 text-[13px] font-medium text-[#6b7684]">
								{item.price.toLocaleString()}원
							</p>
						</div>

						<div className="flex shrink-0 items-center gap-2 text-[15px] font-medium text-[#6b7684]">
							<button
								type="button"
								aria-label={`${item.name} 수량 감소`}
								disabled={item.count <= 1}
								onClick={() => onDecrease(item.id)}
								className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border border-[#d1d6db] bg-white text-[18px] disabled:cursor-not-allowed disabled:text-[#b0b8c1]"
							>
								−
							</button>
							<span className="min-w-8 text-center" aria-live="polite">
								{item.count}개
							</span>
							<button
								type="button"
								aria-label={`${item.name} 수량 증가`}
								onClick={() => onIncrease(item.id)}
								className="grid h-7 w-7 cursor-pointer place-items-center rounded-full border border-[#d1d6db] bg-white text-[18px]"
							>
								+
							</button>
						</div>
					</div>
				))}
			</div>

			<button
				type="button"
				className="mt-[1px] flex h-[54px] w-full items-center justify-center bg-white text-[17px] font-semibold text-[#3182f6]"
			>
				더 담기 +
			</button>
		</section>
	);
};

export default CartBar;
