import type { Menu } from "../types/stores";
import { useCartStore } from "../stores/useCartStore";

interface MenuItemProps {
	storeId: number;
	menus: Menu[];
}

const MenuItem = ({ storeId, menus }: MenuItemProps) => {

	const addToCart = useCartStore((state) => state.addToCart);

	return (
		<div className="flex flex-col w-[390px]">
			{menus.map((menu) => {
				const {
					id,
					name,
					isBest,
					price,
					ingredients,
				} = menu;

				return (
					<div key={id} className="flex h-[110px]">
						<div className="h-[54px] w-[54px] m-[28px_16px_28px_24px] rounded-[27px] bg-[#ECECEC]" />
						<div className="flex flex-col py-[16px] gap-[5px]">
							<div className="flex gap-[6px] text-[17px] font-semibold">
								<span className="text-[#333D4B]">{name}</span>
								{isBest && <span className="text-[#3182F6]">BEST</span>}
							</div>
							<span className="font-medium text-[#6B7684] text-[13px]">{price.toLocaleString()}원</span>
							<span className="h-[32px] w-[180px] text-[#6B7684] text-[13px]">{ingredients}</span>
						</div>
						<button
							type="button"
							onClick={() => addToCart(menu, storeId)}
							className="flex ml-auto m-[40px_24px_38px_0] w-[52px] h-[32px] rounded-[8px] bg-[#3182F6] items-center justify-center text-[13px] text-[#FFFFFF] font-medium cursor-pointer"
						>
							담기
						</button>
					</div>
				);
			})}
		</div>
	);
};


export default MenuItem;
