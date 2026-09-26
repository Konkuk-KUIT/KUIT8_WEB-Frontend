const CartStoreHeader = ({ name, isBelowMinOrder }) => {
	return (
		<div className="flex items-center justify-between px-[24px] pt-[26px]">
			<h2 className="text-[17px] font-bold text-[#6b7684]">{name}</h2>
			{isBelowMinOrder && (
				<span className="flex items-center gap-[4px] text-[15px] font-medium text-[#f04452]">
					최소금액 미달
					<img src="/warning.svg" alt="" />
				</span>
			)}
		</div>
	);
};

export default CartStoreHeader;
