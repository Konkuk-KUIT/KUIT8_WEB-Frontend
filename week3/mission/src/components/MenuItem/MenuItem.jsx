import Button from "../Button";

const MenuItem = ({ menu }) => {
	const handleAddMenu = () => {};

	return (
		<div className="flex h-[110px] w-[390px] items-center gap-[16px] pl-[24px]">
			<div className="h-[54px] w-[54px] shrink-0 rounded-full bg-[#ececec]" />

			<div className="flex w-[204px] flex-col gap-[5px] pr-[3px]">
				<div className="flex gap-[6px]">
				<h3 className="text-[17px] font-semibold text-[#333d4b]">
					{menu.name}
				</h3>

				{menu.isBest && (
					<span className="text-[13px] font-semibold text-[#3182f6]">BEST</span>
				)}
				</div>

				<span className="text-[13px] font-medium text-[#6b7684]">
					{menu.price.toLocaleString()}원
				</span>

				<p className="text-[13px] font-medium text-[#6b7684]">
					{menu.ingredients}
				</p>
			</div>

			<Button size="sm" onClick={handleAddMenu}>
				담기
			</Button>
		</div>
	);
};

export default MenuItem;
