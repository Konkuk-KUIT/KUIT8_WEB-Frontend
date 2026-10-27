import BackBar from "../../components/BackBar";
import CartItem from "../../components/CartItem";
import PaymentFooter from "../../components/PaymentFooter";
import PriceSummary from "../../components/PriceSummary";
import stores from "../../models/stores";

const Cart = () => {
  const store = stores[0];
  const menu = store.menus[0];

  // stores.js에 없는 장바구니 전용 데이터는 임시로 추가
  const cartItem = {
    ...menu,
    options: "추천소스, 채소볼, 베이컨추가, 시저드레싱 추가",
    quantity: 1,
  };

  const orderPrice = menu.price;
  const deliveryFee = store.deliveryFee;
  const totalPrice = orderPrice + deliveryFee;

  const isBelowMinimum = orderPrice < store.minDeliveryPrice;

  return (
    <main className="mt-[41px] w-[390px] bg-white">
      {/* 상단바 - 여긴 주문 취소 활성화*/}
      <BackBar orderCancel={true} />

      {/* BackBar 아래 3px 간격 */}
      <div className="h-[3px]" />

      {/* 회색 구분 영역 */}
      <div className="h-[16px] bg-[#f2f4f6]" />

      {/* 주문한 가게 영역 */}
      <section>
        {/* 가게 header */}
		<div className="flex h-[58px] items-start justify-between pt-[26px] pr-[25px] pl-[24px]">
		<span className="text-[17px] font-semibold text-[#6b7684]">
			{store.name}
		</span>

		{isBelowMinimum && (
			<div className="flex items-center gap-[6px]">
				<span className="text-[15px] font-medium text-[#f04452]">
					최소금액 미달
				</span>

				<img
					src="/alert-circle.svg"
					alt="minimum order alert"
					className="h-[16px] w-[16px]"
				/>
			</div>
		)}
		</div>

        {/* 장바구니 상품 */}
        <CartItem item={cartItem} />

        {/* 더 담기 */}
		<button
			type="button"
			className="flex w-full cursor-pointer items-center justify-center gap-[3px] border-t border-[#e5e8eb] pt-[18px] pb-[20px] text-[17px] font-semibold text-[#3182f6]"
			>
			<span>더 담기</span>

			<span className="p-[2px]">
				<img
				src="/plus.svg"
				alt=""
				/>
			</span>
		</button>
      </section>

      {/* 두 번째 회색 구분 영역 */}
      <div className="h-[16px] bg-[#f2f4f6]" />

      {/* 가격 요약 */}
      <PriceSummary
        orderPrice={orderPrice}
        deliveryFee={deliveryFee}
        totalPrice={totalPrice}
      />

      {/* 하단 결제 영역 */}
      <PaymentFooter
        minOrderPrice={store.minDeliveryPrice}
        totalPrice={totalPrice}
        disabled={isBelowMinimum}
      />
    </main>
  );
};

export default Cart;
