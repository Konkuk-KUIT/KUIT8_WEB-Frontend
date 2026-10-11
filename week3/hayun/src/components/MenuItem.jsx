const MenuItem = ({ menus = [] }) => {
	return (
		<div className="flex flex-col w-[390px]">
			{menus.map(
				({
					id,
					name,
					isBest,
					price,
					ingredients,
				}) => (
					<div key={id} className="flex h-[110px]">
                        <div className="h-[54px] w-[54px] m-[28px_16px_28px_24px] rounded-[27px] bg-[#ECECEC]" />
                        <div className="flex flex-col py-[16px] gap-[5px]">
                            <div className="flex gap-[6px] text-[17px] font-semibold">
                                <span className="text-[#333D4B]">{name}</span>
                                {isBest && <span className="text-[#3182F6]">BEST</span>}
                            </div>
                            <span className="font-medium text-[#6B7684] text-[13px]">{price.toLocaleString()}원</span>
                            <span className="h-[32px] w-[180px] text-[#6B7684] text-[13px]">{ingredients}</span>
                        </div>
                        <button className="flex ml-auto m-[40px_24px_38px_0] w-[52px] h-[32px] rounded-[8px] bg-[#3182F6] items-center justify-center text-[13px] text-[#FFFFFF] font-medium">
                            담기
                        </button>
                    </div>
				),
			)}
		</div>
	);
};


export default MenuItem;
