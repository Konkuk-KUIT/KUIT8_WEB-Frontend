// 첫 번째 가게 한 칸을 값 그대로 붙여 디자인부터 맞춘다. 데이터 연결은 다음 단계에서 한다.
const StoreItem = () => {
	return (
		<div className="mt-[100px] flex w-[390px] flex-col">
			<div className="flex w-[390px] gap-[17px] p-[16px_0_17px_24px]">
				<div className="h-[54px] w-[54px] rounded-[8px] bg-[#ececec]" />

				<div className="flex flex-col gap-[5px]">
					<div className="flex flex-col gap-[2px] text-[17px] font-semibold text-[#333d4b]">
						<span>1위</span>
						<span>샐로리 한남점</span>
					</div>

					<div className="flex items-center gap-[1px] text-[13px] font-medium text-[#6b7684]">
						<img src="/graystar.svg" alt="ratestar" />
						<span>4.9 (3,919)</span>
					</div>

					<span className="text-[13px] font-medium text-[#6b7684]">
						13분~30분 ∙ 배달비 2,000원
					</span>
				</div>
			</div>
		</div>
	);
};

export default StoreItem;
