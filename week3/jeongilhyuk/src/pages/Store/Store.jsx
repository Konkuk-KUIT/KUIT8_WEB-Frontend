import { useParams } from "react-router-dom";
import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import MenuSection from "../../components/store/MenuSection";
import StoreInfo from "../../components/store/StoreInfo";
import stores from "../../models/stores";

const Store = () => {
	// 주소의 storeId 는 문자열이라 숫자 id 와 비교하려면 Number 로 바꾼다.
	const { storeId } = useParams();
	const store = stores.find(({ id }) => id === Number(storeId));

	if (!store) {
		return (
			<main className="mt-[41px] w-[390px] px-[24px] pt-[26px] text-[17px] text-[#6b7684]">
				<BackBar orderCancel={false} />
				가게를 찾을 수 없어요.
			</main>
		);
	}

	// 4~6번 가게는 menus 가 없어 빈 배열로 둔다.
	const { menus = [] } = store;

	return (
		<main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo
				name={store.name}
				rate={store.rate}
				reviewCnt={store.reviewCnt}
				paymentMethod="토스결제만 현장결제 안됨"
				minDeliveryPrice={store.minDeliveryPrice}
				minDeliveryTime={store.minDeliveryTime}
				maxDeliveryTime={store.maxDeliveryTime}
			/>
			<MenuSection title="샐러드" menus={menus} />
			<OrderBar />
		</main>
	);
};

export default Store;
