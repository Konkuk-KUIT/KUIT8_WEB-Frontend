const BackBar = ({ orderCancel }) => {
	return (
		<div className="fixed top-0 z-40 flex h-[41px] w-[390px] items-start justify-between bg-white pr-[15px] pl-[10px]">
			<img className="mt-[7px]" src="/arrow.svg" alt="뒤로 가기" />
			{orderCancel && (
				<span className="mt-[9px] text-[16px] leading-[normal] font-semibold text-[#333d4b]">
					주문취소
				</span>
			)}
		</div>
	);
};

export default BackBar;
