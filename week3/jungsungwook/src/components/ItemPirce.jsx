const ItemPirce = ({ orderPrice, deliveryFee, totalPrice }) => {
    return (
        <div className="">
            <div className="mt-[16px]"></div>
            {/* 주문금액 */}
            <div className="px-[24px] py-[8px] flex justify-between">
                <span className="text-gray-400
text-base
font-medium]">
                    주문금액
                </span>

                <span className="text-gray-600
text-base
font-medium">
                    {orderPrice.toLocaleString()}원
                </span>
            </div>

            {/* 배달요금 */}
            <div className="px-[24px] py-[8px] flex justify-between">
                <span className="text-gray-400
text-base
font-medium">
                    배달요금
                </span>

                <span className="text-gray-600
text-base
font-medium">
                    {deliveryFee.toLocaleString()}원
                </span>
            </div>

            {/* 총 결제금액 */}
            <div className="py-[18px] px-[24px] flex justify-between">
                <span className="text-gray-600
text-base
font-medium">
                    총 결제금액
                </span>

                <span className="text-gray-600
text-base
font-medium">
                    {totalPrice.toLocaleString()}원
                </span>
            </div>
            <div className="mb-[17px]"></div>
        </div>
    )
}

export default ItemPirce