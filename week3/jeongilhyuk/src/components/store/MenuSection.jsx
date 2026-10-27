import MenuItem from "./MenuItem";

const MenuSection = ({ title, menus }) => {
	return (
		<section className="pt-[26px] pb-[32px]">
			<h2 className="px-[24px] text-[17px] font-semibold text-[#6b7684]">
				{title}
			</h2>

			<ul className="mt-[11px]">
				{menus.map(({ id, name, isBest, price, ingredients }) => (
					<li key={id}>
						<MenuItem
							name={name}
							isBest={isBest}
							price={price}
							ingredients={ingredients}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};

export default MenuSection;
