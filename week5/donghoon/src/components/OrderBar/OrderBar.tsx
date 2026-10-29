import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { useCartStore } from "../../store/useCartStore";

//5주차 - 이제 totalPrice도 props로 전달하는게 아니라
//Zustand 에서 읽어오자
const OrderBar = () => {
  const navigate = useNavigate();

  // 전역 장바구니의 메뉴 목록 가져오기
  const items = useCartStore((state) => state.items);

  // 수량까지 고려한 메뉴 합계
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <div className="fixed bottom-[0px] z-50 flex h-[77px] w-[390px] items-center justify-between rounded-t-[16px] bg-white px-[24px] shadow-[0_-8px_16px_0_rgba(0,0,0,0.1)]">
      <div className="flex flex-col gap-[5px]">
        <span className="text-[15px] font-normal text-[#6b7684]">
          총 주문금액
        </span>

        <strong className="text-[17px] font-semibold text-[#4e5968]">
          {totalPrice.toLocaleString()}원
        </strong>
      </div>

      <Button
        onClick={handleOrder}
        type="button"
        size="lg"
      >
        주문하기
      </Button>
    </div>
  );
};

export default OrderBar;
