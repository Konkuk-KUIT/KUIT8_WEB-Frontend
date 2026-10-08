const CartPrice = ({ orderPrice, deliveryFee, totalPrice }) => {
	return (
		<section className="bg-white p-6">
			<div className="flex justify-between text-[17px] font-medium text-[#8b95a1]">
				<span>주문금액</span>
				<span>{orderPrice.toLocaleString()}원</span>
			</div>
			<div className="mt-4.5 flex justify-between text-[17px] font-medium text-[#8b95a1]">
				<span>배달요금</span>
				<span>{deliveryFee.toLocaleString()}원</span>
			</div>
			<div className="mt-6.5 flex justify-between text-[17px] font-medium text-[#4e5968]">
				<span>총 결제금액</span>
				<span>{totalPrice.toLocaleString()}원</span>
			</div>
		</section>
	);
};

export default CartPrice;
