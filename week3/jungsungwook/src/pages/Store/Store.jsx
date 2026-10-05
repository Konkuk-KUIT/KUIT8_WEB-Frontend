import OrderBar from "../../components/OrderBar/OrderBar"
import BackBar from "../../components/BackBar";
import StoreInfo from "../../components/StoreInfo";
import stores from "../../models/stores";
import StoreItems from "../../components/StoreItems";

const Store = () => {
    return (
        <div className="mt-[41px] w-[390px] flex flex-col">
        <BackBar orderCancel={false} />
        
        <StoreInfo store = {stores[0]}>
        </StoreInfo>
        
        <StoreItems menus = {stores[0].menus}>

        </StoreItems>

        <OrderBar>

        </OrderBar>
    </div>
    )
}

export default Store
