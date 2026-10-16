interface BackBarProps {
	orderCancel?: boolean;
	remainingSeconds?: number;
}

const BackBar = ({ orderCancel = false, remainingSeconds }: BackBarProps) => {
	const remainingTime = remainingSeconds === undefined
		? ""
		: `${Math.floor(remainingSeconds / 60)}:${String(remainingSeconds % 60).padStart(2, "0")}`;
	
	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<img src="/arrow.svg" alt="BackButton" />

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
				<span className="text-[16px] font-semibold text-[#333d4b]">
					주문취소
				</span>
			)}
		</div>
	);
};

export default BackBar;
