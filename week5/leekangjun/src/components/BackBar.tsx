import { useNavigate } from "react-router";
import { useCartStore } from "../pages/Stores/cartStore";

interface BackBarProps {
    orderCancel?: boolean
}

const BackBar = ({ orderCancel = false }: BackBarProps) => {
	const navigate= useNavigate();
	const clearCart = useCartStore((state)=>state.clearCart);

	return (
		<div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
			<button onClick={()=>navigate(-1)} className="cursor-pointer"><img src="/arrow.svg" alt="BackButton" /></button>
			{orderCancel && (
				<button 
					onClick={()=>{
						clearCart();
						navigate("/store");
					}} 
					className="cursor-pointer text-[16px] font-semibold text-[#333d4b]"
				>
					주문취소
				</button>
			)}
		</div>
	);
};

export default BackBar;
