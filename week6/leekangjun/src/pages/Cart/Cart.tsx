import { skipToken, useQuery } from "@tanstack/react-query";
import BackBar from "../../components/BackBar";
import TotalOrder from "../../components/TotalOrder";
import { useCartStore } from "../../zustand/cartStore";
import { getStore } from "../../api/store";

const Cart = () => {
	
	const items = useCartStore((state)=>state.items);
	const storeId = items[0]?.storeId;
	const {
		data: selectedStore,
		isPending,
		isError,
		refetch
	  } = useQuery({
		queryKey: ["store",storeId],
		queryFn: storeId !== undefined
            ? () => getStore(storeId)
            : skipToken,
		retry: false
	  });
  	
	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel />
			<div className="w-full h-4 bg-gray-100"></div>
			
			{items.length===0?
			<p>장바구니가 비어 있습니다.</p>
			:isPending?(
				<p aria-live="polite">
					가게 정보를 불러오는 중입니다.
				</p>
			):isError? (
				<div role="alert">
					<p>가게 정보를 불러오지 못했습니다.</p>
					<button
						type="button"
						onClick={() => void refetch()}
					>
						다시 시도
					</button>
				</div>
			): selectedStore?(
				<TotalOrder item={selectedStore} />
			):<p>가게정보가 비어 있습니다.</p>}
		</main>
	);
};

export default Cart;
