
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../stores/useCartStore";
import Button from "../Button";

const OrderBar = () => {
    const navigate = useNavigate();

    // Zustand에서 장바구니 메뉴 가져오기
    const items = useCartStore((state) => state.items);

    // 메뉴 합계 계산 (배달비 제외)
    const totalPrice = items.reduce(
        (sum, item) => sum + item.menu.price * item.quantity,
        0
    );

    // 주문하기 버튼 클릭
    const handleOrder = () => {
        navigate("/cart");
    };

    return (
        <div className="fixed bottom-[0px] z-30 flex h-[77px] w-[390px] items-center justify-between rounded-t-[16px] bg-white px-[24px] shadow-[0_-8px_16px_0_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-[5px]">
                <span className="text-[15px] font-normal text-[#6b7684]">
                    총 주문금액
                </span>

                <strong className="text-[17px] font-semibold text-[#4e5968]">
                    {totalPrice.toLocaleString()}원
                </strong>
            </div>

            <Button onClick={handleOrder} type="button" size="lg">
                주문하기
            </Button>
        </div>
    );
};

export default OrderBar;