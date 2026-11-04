// 4주차 적용 내용 - BackBar에 타입 적용
interface BackBarProps {
  orderCancel?: boolean;
}

const BackBar = ({ orderCancel = false }: BackBarProps) => {
	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<img src="/arrow.svg" alt="BackButton" />
			{orderCancel && (
				<span className="text-[16px] font-semibold text-[#333d4b]">
					주문취소
				</span>
			)}
		</div>
	);
};

export default BackBar;
