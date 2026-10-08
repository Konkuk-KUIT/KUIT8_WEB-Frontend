import { formatWon } from "../../utils/format";
import Button from "../Button";

const PaymentBar = ({ totalPrice, minOrderPrice, isBelowMinOrder }) => {
	return (
		<div className="fixed bottom-0 left-0 flex w-[390px] flex-col items-center gap-[19px] bg-white pb-[34px]">
			{isBelowMinOrder && (
				<p className="text-[17px] font-medium text-[#6b7684]">
					최소 주문금액 {formatWon(minOrderPrice)}
				</p>
			)}
			<Button size="xl" disabled={isBelowMinOrder}>
				{formatWon(totalPrice)} 결제하기
			</Button>
		</div>
	);
};

export default PaymentBar;
