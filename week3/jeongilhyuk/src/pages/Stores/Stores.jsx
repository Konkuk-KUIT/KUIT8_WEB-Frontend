import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreList from "../../components/StoreList";
import stores from "../../models/stores";

const Stores = () => {
	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<div className="fixed top-[41px] w-[390px] bg-white p-[26px_298px_2px_24px] text-[26px] font-bold text-[#191f28]">
				샐러드
			</div>
			<StoreList stores={stores} />
			<OrderBar />
		</main>
	);
};

export default Stores;
