import StoreItem from "./StoreItem";

// 목록은 반복과 순위 규칙만 맡고, 가게 한 칸의 모양은 StoreItem 에 맡긴다.
const StoreList = ({ stores }) => {
	return (
		<ul className="mt-[100px] flex w-[390px] flex-col">
			{stores.map(
				({
					id,
					name,
					rate,
					reviewCnt,
					minDeliveryTime,
					maxDeliveryTime,
					deliveryFee,
				}) => (
					<li key={id}>
						<StoreItem
							rank={id < 4 ? id : null}
							name={name}
							rate={rate}
							reviewCnt={reviewCnt}
							minDeliveryTime={minDeliveryTime}
							maxDeliveryTime={maxDeliveryTime}
							deliveryFee={deliveryFee}
						/>
					</li>
				),
			)}
		</ul>
	);
};

export default StoreList;
