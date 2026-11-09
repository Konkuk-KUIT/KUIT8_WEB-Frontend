import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";

interface BackBarProps {
	orderCancel?: boolean;
	remainingSeconds?: number;
}

const BackBar = ({ orderCancel = false, remainingSeconds }: BackBarProps) => {
	const resetCart = useCartStore((state) => state.resetCart);
	const navigate = useNavigate();
	const handleClick= () => {
		resetCart();
		navigate("/store");
	};

	const remainingTime = remainingSeconds === undefined
		? ""
		: `${Math.floor(remainingSeconds / 60)}:${String(remainingSeconds % 60).padStart(2, "0")}`;
	
	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<button
				type="button"
				onClick={() => navigate(-1)}
				className="cursor-pointer"
			>
				<img src="/arrow.svg" alt="BackButton" />
			</button>

			{remainingSeconds !== undefined && (
				<div className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[15px] font-medium">
					{remainingSeconds === 0 ? (
						<p role="alert" className="text-[#F04452]">주문 시간 만료</p>
					) : (
						<p className="text-[#6B7684]">
							남은 시간 <span role="timer" className="text-[#3182F6]">{remainingTime}</span>
						</p>
					)}
				</div>
			)}
			
			{orderCancel && (
				<button onClick={handleClick} className="text-[16px] font-semibold text-[#333d4b] cursor-pointer">
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
