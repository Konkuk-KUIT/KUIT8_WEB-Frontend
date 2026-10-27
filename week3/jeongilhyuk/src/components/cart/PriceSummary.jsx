import { formatWon } from "../../utils/format";

const PriceRow = ({ label, price, isTotal = false }) => {
	return (
		<div
			className={`flex justify-between pr-[23px] pl-[24px] text-[17px] font-medium ${
				isTotal ? "h-[54px] pt-[16px] text-[#4e5968]" : "h-[38px] pt-[8px]"
			}`}
		>
			<dt className={isTotal ? "" : "text-[#8b95a1]"}>{label}</dt>
			<dd className={isTotal ? "font-semibold" : "text-[#505967]"}>
				{formatWon(price)}
			</dd>
		</div>
	);
};

const PriceSummary = ({ orderPrice, deliveryFee, totalPrice }) => {
	return (
		<dl className="mt-[16px] pb-[17px]">
			<PriceRow label="주문금액" price={orderPrice} />
			<PriceRow label="배달요금" price={deliveryFee} />
			<PriceRow label="총 결제금액" price={totalPrice} isTotal />
		</dl>
	);
};

export default PriceSummary;
