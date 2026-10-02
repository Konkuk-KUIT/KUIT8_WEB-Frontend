import Button from "./Button";

const MenuItem = ({ menu }) => {
	return (
		<article className="flex w-full items-center gap-4 px-6 py-4">
			<div className="h-13.5 w-13.5 shrink-0 rounded-[27px] bg-[#ececec]" />

			<div className="min-w-0 flex-1">
				<div className="flex items-center gap-1.5">
					<h3 className="text-[17px] font-semibold text-[#333d4b]">
						{menu.name}
					</h3>
					{menu.isBest && (
						<span className="text-[17px] font-semibold text-[#3182f6]">
							BEST
						</span>
					)}
				</div>

				<p className="mt-[5px] text-[13px] font-medium text-[#6b7684]">
					{menu.price.toLocaleString()}원
				</p>
				<p className="mt-[5px] line-clamp-2 text-[13px] font-medium leading-[18px] text-[#6b7684]">
					{menu.ingredients}
				</p>
			</div>

			<Button type="button" size="sm">
				담기
			</Button>
		</article>
	);
};

export default MenuItem;
