const StoreMenuItem = ({ menu }) => {
	return (
		<div className="relative flex h-[110px] w-[390px]">
			<div className="absolute left-[24px] top-[28px] h-[54px] w-[54px] rounded-full bg-[#ececec]" />

			<div className="absolute left-[94px] top-[16px] flex items-center gap-[6px]">
				<span className="text-[17px] font-semibold text-[#333d4b]">
					{menu.name}
				</span>

				{menu.isBest && (
					<span className="text-[17px] font-semibold text-[#3182f6]">
						BEST
					</span>
				)}
			</div>

			<span className="absolute left-[94px] top-[41px] text-[13px] font-medium text-[#6b7684]">
				{menu.price.toLocaleString()}원
			</span>

			<span className="absolute left-[94px] top-[62px] w-[201px] text-[13px] font-medium leading-[16px] text-[#6b7684]">
				{menu.ingredients}
			</span>

			<button className="absolute left-[314px] top-[40px] h-[32px] w-[52px] rounded-[8px] bg-[#3182f6] text-[13px] font-medium text-white">
				담기
			</button>
		</div>
	);
};

export default StoreMenuItem;