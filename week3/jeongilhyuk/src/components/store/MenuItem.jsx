import { formatWon } from "../../utils/format";
import Button from "../Button";
import Thumbnail from "../Thumbnail";

const MenuItem = ({ name, isBest, price, ingredients }) => {
	return (
		<div className="flex h-[110px] items-center px-[24px]">
			<Thumbnail shape="circle" />

			<div className="ml-[16px] flex w-[201px] flex-col gap-[5px]">
				<strong className="text-[17px] font-semibold text-[#333d4b]">
					{name}
					{isBest && <span className="ml-[6px] text-[#3182f6]">BEST</span>}
				</strong>
				<span className="text-[13px] font-medium text-[#6b7684]">
					{formatWon(price)}
				</span>
				<p className="break-keep text-[13px] font-medium text-[#6b7684]">
					{ingredients}
				</p>
			</div>

			<Button className="ml-auto">담기</Button>
		</div>
	);
};

export default MenuItem;
