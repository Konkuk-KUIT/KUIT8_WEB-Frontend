const StoreItem = ({ items }) => {
	return (
		<div className="mt-[100px] flex w-[390px] flex-col">
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
					<div key={id}>
						<div className="flex w-[390px] gap-[17px] p-[16px_0_17px_24px]">
							<div className="h-[54px] w-[54px] rounded-[8px] bg-[#ececec]" />

							<div className="flex flex-col gap-[5px]">
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
						</div>
					</div>
				),
			)}
		</div>
	);
};

export default StoreItem;
