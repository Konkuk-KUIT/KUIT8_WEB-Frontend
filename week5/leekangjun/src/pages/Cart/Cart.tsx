import BackBar from "../../components/BackBar";
import TotalOrder from "../../components/TotalOrder";
import stores from "../../models/stores";
import { useCartStore } from "../Stores/cartStore";

const Cart = () => {
	const items = useCartStore((state)=>state.items);
	const storeId = items[0]?.storeId;
	const selectedStore = stores.find((store)=>store.id===storeId)
  	
	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel />
			<div className="w-full h-4 bg-gray-100"></div>
			
			{items.length===0?
			<p>장바구니가 비어 있습니다.</p>
			:selectedStore?(
				<TotalOrder item={selectedStore} />
			):<p>가게정보가 비어 있습니다.</p>}
		</main>
	);
};

export default Cart;
