import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../stores/useCartStore';

interface BackBarProps {
	orderCancel?: boolean;
	backTo?: string;
}

const BackBar = ({ orderCancel = false, backTo = '/store' }: BackBarProps) => {
	const navigate = useNavigate();
	const clearCart = useCartStore((state) => state.clearCart);
	const handleCancel = () => {
		clearCart();
		navigate('/store');
	};
	return (
		<div className="fixed top-0 z-30 flex h-[41px] w-full max-w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<button type="button" onClick={() => navigate(backTo)} aria-label="뒤로 가기" className="flex size-9 cursor-pointer items-center justify-center rounded-lg">
				<img src="/arrow.svg" alt="" />
			</button>
			{orderCancel && (
				<button type="button" onClick={handleCancel} className="cursor-pointer text-[16px] font-semibold text-[#333d4b]">
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
