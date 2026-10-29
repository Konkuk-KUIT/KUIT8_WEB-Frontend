import { useNavigate } from "react-router-dom";

interface BackBarProps {
  orderCancel?: boolean;
  onOrderCancel?: () => void;
}

const BackBar = ({
  orderCancel = false,
  onOrderCancel,
}: BackBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-[0px] z-10 flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
      {/* 뒤로가기 버튼 */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        aria-label="뒤로가기"
        className="cursor-pointer border-0 bg-transparent"
      >
        <img src="/arrow.svg" alt="" />
      </button>

      {/* 주문 취소 버튼 */}
      {orderCancel && (
        <button
          type="button"
          onClick={onOrderCancel}
          className="cursor-pointer border-0 bg-transparent text-[16px] font-semibold text-[#333d4b]"
        >
          주문취소
        </button>
      )}
    </div>
  );
};

export default BackBar;