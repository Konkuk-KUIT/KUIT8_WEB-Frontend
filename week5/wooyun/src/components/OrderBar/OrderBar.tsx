import { useNavigate } from "react-router-dom";
import {
	selectMenuTotal,
	useCartStore,
} from "../../stores/useCartStore";
import Button from "../Button";

interface OrderBarProps {
	onOrder?: () => void;
}

const OrderBar = ({ onOrder }: OrderBarProps) => {
	const navigate = useNavigate();
	const menuTotal = useCartStore(selectMenuTotal);
	const handleOrder = onOrder ?? (() => navigate("/cart"));

	return (
		<div className="fixed bottom-[0px] flex h-[77px] w-[390px] items-center justify-between rounded-t-[16px] bg-white px-[24px] shadow-[0_-8px_16px_0_rgba(0,0,0,0.1)]">
			<div className="flex flex-col gap-[5px]">
				<span className="text-[15px] font-normal text-[#6b7684]">
					총 주문금액
				</span>
				<strong className="text-[17px] font-semibold text-[#4e5968]">
					{menuTotal.toLocaleString()}원
				</strong>
			</div>

			<Button onClick={handleOrder} type="button" size="lg">
				주문하기
			</Button>
		</div>
	);
};

export default OrderBar;
