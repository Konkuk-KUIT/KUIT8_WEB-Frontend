import { formatWon } from "../../utils/format";
import Thumbnail from "../Thumbnail";

const CartItem = ({ name, options, price, quantity }) => {
	return (
		<div className="flex h-[110px] items-center pr-[20px] pl-[24px]">
			<div className="flex items-start gap-[16px] self-start pt-[16px]">
				<div className="mt-[3px]">
					<Thumbnail />
				</div>
				<div className="flex w-[210px] flex-col gap-[5px] text-[13px] font-medium text-[#6b7684]">
					<strong className="text-[17px] font-bold text-[#333d4b]">
						{name}
					</strong>
					<p>{options}</p>
					<span>{formatWon(price)}</span>
				</div>
			</div>

			<div className="ml-auto flex items-center gap-[14px] text-[15px] font-medium text-[#6b7684]">
				<span>{quantity}개</span>
				<img src="/chevron-right.svg" alt="" />
			</div>
		</div>
	);
};

export default CartItem;
