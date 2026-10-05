
const CartItem = ({ item }) => {
  return (
    <div className="px-5 py-4 flex items-start bg-white border-b border-[#F2F4F6]">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-lg mr-3" />

      <div className="flex-1 w-0">
        <p className="font-semibold text-[17px] mb-1">{item.name}</p>
        <div className="flex items-center justify-between">
          <p className="text-[13px] text-[#6B7684] whitespace-normal break-keep leading-[1.3]">{item.extra}</p>

          <div className="flex items-center gap-3 shrink-0 ml-3">
            <span className="text-[15px] text-[#6B7684]">{item.quantity}개</span>
            <img src="/chevron-right.svg" className="w-3 h-3" />
          </div>
        </div>

        <p className="text-[13px] text-[#6B7684] font-medium mt-1">{item.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default CartItem;
