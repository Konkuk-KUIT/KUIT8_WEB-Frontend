import BackBar from "../../components/BackBar";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreInfo from "../../components/StoreInfo";
import MenuList from "../../components/MenuList";
import stores from "../../models/stores";

const Store = () => {
    return (
        <main className="mt-[41px] mb-[77px] w-[390px]">
			<BackBar orderCancel={false} />
			<StoreInfo item={stores[0]} />
            <MenuList  menus={stores[0].menus}/>
			<OrderBar />
		</main>
    );
};

export default Store;
