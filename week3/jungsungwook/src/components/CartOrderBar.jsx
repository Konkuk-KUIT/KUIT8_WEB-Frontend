const CartOrderBar = ({ totalPrice, minDeliveryPrice, canOrder }) => {
    return (
        <div className="fixed bottom-[0px] w-[390px] ">
            <div className="text-gray-500
text-base
font-medium
text-center">
                최소 주문금액 {minDeliveryPrice.toLocaleString()}원
            </div>

            <button
                disabled={!canOrder}
                className="mt-[19px] flex h-[56px] w-[350px] items-center justify-center rounded-2xl bg-[#D0DFFB] text-base font-semibold text-white"
            >
                {totalPrice.toLocaleString()}원 결제하기
            </button>
        </div>
    );
};

export default CartOrderBar;