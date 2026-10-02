import BackBar from "../../components/BackBar";
import MenuItem from "../../components/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";

const Store = () => {
	const store = stores[0];
	const menus = store.menus ?? [];

	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo store={store} />

			<section className="pt-[26px]">
				<h2 className="pl-6 text-[17px] font-semibold text-[#6b7684]">
					샐러드
				</h2>

				<ul className="mt-[11px] flex flex-col">
					{menus.map((menu) => (
						<MenuItem key={menu.id} menu={menu} />
					))}
				</ul>
			</section>

			<OrderBar />
		</main>
	);
};

export default Store;
