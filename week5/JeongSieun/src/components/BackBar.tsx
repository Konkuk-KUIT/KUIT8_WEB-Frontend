
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/useCartStore";

interface BackBarProps {
  orderCancel: boolean;
}

const BackBar = ({ orderCancel }: BackBarProps) => {
  const navigate = useNavigate();

  // Zustand에서 장바구니 초기화 함수 가져오기
  const clearCart = useCartStore((state) => state.clearCart);

  // 뒤로 가기
  const handleBack = () => {
    navigate(-1);
  };

  // 주문 취소
  const handleCancel = () => {
    clearCart();
    navigate("/store");
  };

  return (
    <div className="fixed top-0 z-40 flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
      <button
        type="button"
        onClick={handleBack}
        aria-label="뒤로 가기"
        className="cursor-pointer"
      >
        <img src="/arrow.svg" alt="" />
      </button>

      {orderCancel && (
        <button
          type="button"
          onClick={handleCancel}
          className="cursor-pointer text-[16px] font-semibold text-[#333d4b]"
        >
          주문취소
        </button>
      )}
    </div>
  );
};

export default BackBar;
