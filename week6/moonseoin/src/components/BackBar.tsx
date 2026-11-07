import { useNavigate } from "react-router-dom";

import useCartStore from "../stores/useCartStore";

interface BackBarProps {
  orderCancel: boolean;
}

const BackBar = ({ orderCancel }: BackBarProps) => {
	const navigate = useNavigate();
	const clearCart = useCartStore((state) => state.clearCart);
	const handleCancel = () => {
		clearCart();
		navigate("/store");
	};

	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<img src="/arrow.svg" alt="BackButton" />
			{orderCancel && (
				<button type="button" onClick={handleCancel} className="cursor-pointer text-[16px] font-semibold text-[#333d4b]">
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
