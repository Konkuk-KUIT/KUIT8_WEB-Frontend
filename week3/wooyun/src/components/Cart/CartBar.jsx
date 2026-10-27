const CartBar = ({ store, menu, quantity }) => {
	return (
		<section className="border-y-[16px] border-[#F2F4F6] bg-white pt-[27px]">
			<div className="px-[24px]">
				<div className="flex items-center justify-between">
					<h1 className="text-[17px] font-bold text-[#6B7684]">
						{store.name}
					</h1>
					<span className="text-[15px] font-medium text-[#f04452]">
						최소금액 미달 ⓘ
					</span>
				</div>

				<div className="mt-7 flex items-center gap-4 pb-4 border-b-[1px] border-[#f2f4f6]">
					<div className="h-[54px] w-[54px] shrink-0 rounded-[8px] bg-[#ececec]" />

					<div className="min-w-0 flex-1">
						<h2 className="text-[17px] font-bold text-[#333d4b]">
							{menu.name}
						</h2>
						<p className="mt-1.25 line-clamp-2 text-[13px] font-medium leading-[18px] text-[#6b7684]">
							{menu.ingredients}
						</p>
						<p className="mt-1.25 text-[13px] font-medium text-[#6b7684]">
							{menu.price.toLocaleString()}원
						</p>
					</div>

					<div className="flex shrink-0 items-center gap-[12px] text-[15px] font-medium text-[#6b7684]">
						<span>{quantity}개</span>
						<span className="text-[26px] font-light text-[#6b7684]">›</span>
					</div>
				</div>
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
