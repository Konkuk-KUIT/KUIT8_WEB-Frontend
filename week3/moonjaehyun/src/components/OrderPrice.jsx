const OrderPrice = ({ title, price, emphasized = false }) => {
  return (
    <div
      className={`flex w-[390px] items-center justify-between bg-white pr-[23px] pl-[24px] text-[17px] leading-[20px] ${
        emphasized ? "h-[54px] text-[#4e5968]" : "h-[38px]"
      }`}
    >
      <span
        className={emphasized ? "font-medium" : "font-medium text-[#8b95a1]"}
      >
        {title}
      </span>
      <span
        className={
          emphasized ? "font-semibold" : "font-medium text-[#505967]"
        }
      >
        {price.toLocaleString()}원
      </span>
    </div>
  );
};

export default OrderPrice;
