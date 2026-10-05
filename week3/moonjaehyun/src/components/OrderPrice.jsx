const OrderPrice = ({ title, price, emphasized = false }) => {
  return (
    <div
      className={`flex w-[390px] items-start justify-between bg-white pr-[23px] pl-[24px] text-[17px] leading-[20px] ${
        emphasized
          ? "h-[54px] pt-[16px] text-[#4e5968]"
          : "h-[38px] pt-[8px]"
      }`}
    >
      <span
        className={emphasized ? "font-medium" : "font-medium text-[#8b95a1]"}
      >
        {title}
      </span>
      <span
        className={
          emphasized
            ? "font-semibold"
            : "mt-px font-medium text-[#505967]"
        }
      >
        {price.toLocaleString()}원
      </span>
    </div>
  );
};

export default OrderPrice;
