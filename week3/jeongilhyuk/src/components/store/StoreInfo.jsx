import { formatWon } from "../../utils/format";

const StoreInfo = ({
	name,
	rate,
	reviewCnt,
	paymentMethod,
	minDeliveryPrice,
	minDeliveryTime,
	maxDeliveryTime,
}) => {
	const details = [
		{ label: "결제방법", value: paymentMethod },
		{ label: "최소주문", value: formatWon(minDeliveryPrice) },
		{ label: "배달시간", value: `약 ${minDeliveryTime}-${maxDeliveryTime}분` },
	];

	return (
		<section className="border-b border-[#e5e8eb] px-[24px] pt-[26px] pb-[13px]">
			<h1 className="text-[26px] font-bold text-[#191f28]">{name}</h1>

			<div className="mt-[8px] flex items-center pl-[1px] text-[#4e5968]">
				<img src="/star.svg" alt="별점" />
				<span className="ml-[7px] text-[17px] font-semibold">{rate}</span>
				<span className="ml-[9px] text-[16px] font-medium">
					리뷰{reviewCnt.toLocaleString()}
				</span>
			</div>

			<dl className="mt-[21px] flex flex-col gap-[10px] text-[15px] font-medium text-[#4e5968]">
				{details.map(({ label, value }) => (
					<div key={label} className="flex gap-[12px]">
						<dt>{label}</dt>
						<dd>{value}</dd>
					</div>
				))}
			</dl>
		</section>
	);
};

export default StoreInfo;
