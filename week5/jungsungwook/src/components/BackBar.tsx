type BackBarProps = {
  orderCancel?: boolean;
  onOrderCancel?: () => void;
};

const BackBar = ({ orderCancel, onOrderCancel }: BackBarProps) => {
  return (
    <div className="fixed top-[0px] flex h-[41px] w-[390px] items-center justify-between bg-white pr-[15px] pl-[10px]">
      <img src="/arrow.svg" alt="BackButton" />

      {orderCancel && (
        <button
          type="button"
          onClick={onOrderCancel}
          className="text-[16px] font-semibold text-[#333d4b]"
        >
          주문취소
        </button>
      )}
    </div>
  );
};

export default BackBar;