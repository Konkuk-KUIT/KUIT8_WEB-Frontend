interface CartOrderHeaderProps {
  storeName: string;
  formattedTime: string;
  isExpired: boolean;
  isBelowMinimum: boolean;
  hasItems: boolean;
}

const CartOrderHeader = ({
  storeName,
  formattedTime,
  isExpired,
  isBelowMinimum,
  hasItems,
}: CartOrderHeaderProps) => {
  return (
    <div className="flex min-h-[70px] items-start justify-between gap-[8px] px-[24px] pt-[20px] pb-[12px]">

      {/* 가게 이름 + 남은 시간 */}
      <div className="flex items-center gap-[8px]">
        <span className="whitespace-nowrap text-[17px] font-semibold text-[#6b7684]">
          {storeName}
        </span>

        {hasItems && (
          <span
            aria-label="남은 주문 시간"
            className={`whitespace-nowrap text-[14px] font-semibold ${
              isExpired
                ? "text-[#f04452]"
                : "text-[#3182f6]"
            }`}
          >
            {formattedTime}
          </span>
        )}
      </div>

      {/* 주문 상태 안내 */}
      {hasItems && (
        isExpired ? (
          <span className="text-[14px] font-medium text-[#f04452]">
            주문시간 만료
          </span>
        ) : isBelowMinimum ? (
          <div className="flex shrink-0 items-center gap-[6px]">
            <span className="text-[14px] font-medium text-[#f04452]">
              최소금액 미달
            </span>
            <img
              src="/alert-circle.svg"
              alt=""
              className="h-[16px] w-[16px]"
            />
          </div>
        ) : null
      )}

    </div>
  );
};

export default CartOrderHeader;