import BackBar from "../../components/BackBar";
import InfoStore from "../../components/InfoStore";
import OrderBar from "../../components/OrderBar/OrderBar";
import StoreMenu from "../../components/StoreMenu";
import stores from "../../models/stores";

const Store = () => {
  const data = stores[0];
  const menus = data.menus.map((menu) => <StoreMenu key={menu.id} {...menu} />);

  return (
    <main className="mt-[41px] mb-[77px] w-[390px] ">
      <BackBar orderCancel={false} />
      <InfoStore
        name={data.name}
        rate={data.rate}
        reviewCnt={data.reviewCnt}
        minDeliveryPrice={data.minDeliveryPrice}
        minDeliveryTime={data.minDeliveryTime}
        maxDeliveryTime={data.maxDeliveryTime}
      ></InfoStore>
      <section>
        <div className="box-border flex h-[57px] w-[390px] items-start border-t border-[#e5e8eb] pt-[25px] pl-[24px]">
          <h2
            id="menu-section-title"
            className="text-[17px] leading-[normal] font-semibold whitespace-nowrap text-[#6b7684]"
          >
            샐러드
          </h2>
        </div>
        {menus}
      </section>
      <OrderBar />
    </main>
  );
};

export default Store;
