interface BackBarProps {
    orderCancel?: boolean
}

const BackBar = ({ orderCancel = false }: BackBarProps) => {
	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<button className="cursor-pointer"><img src="/arrow.svg" alt="BackButton" /></button>
			{orderCancel && (
				<button className="cursor-pointer text-[16px] font-semibold text-[#333d4b]">
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
