import BackBar from "../../components/BackBar";
import TotalOrder from "../../components/TotalOrder";
import stores from "../../models/stores";

const Cart = () => {
  	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel />
			<div className="w-full h-4 bg-gray-100"></div>
			<TotalOrder 
				item={stores[0]} 
			/>
		</main>
	);
};

export default Cart;
