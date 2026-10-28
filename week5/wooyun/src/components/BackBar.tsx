import { useNavigate } from "react-router-dom";

interface BackBarProps {
	orderCancel?: boolean;
	onOrderCancel?: () => void;
}

const BackBar = ({
	orderCancel = false,
	onOrderCancel,
}: BackBarProps) => {
	const navigate = useNavigate();

	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<button
				type="button"
				onClick={() => navigate(-1)}
				aria-label="뒤로 가기"
				className="cursor-pointer border-0 bg-transparent p-0"
			>
				<img src="/arrow.svg" alt="" />
			</button>
			{orderCancel && (
				<button
					type="button"
					onClick={onOrderCancel}
					className="cursor-pointer border-0 bg-transparent text-[16px] font-semibold text-[#333d4b]"
				>
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
