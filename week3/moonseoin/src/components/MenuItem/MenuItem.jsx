import Button from "../Button";


const MenuItem = ({ name, price, ingredients, isBest }) => {
  return (
    <div className="flex items-center px-5 py-2">
      <div className="w-[54px] h-[54px] bg-[#ECECEC] rounded-full mr-4" />
      <div className="flex-1 mr-4">
        <div className="flex items-center gap-2 mb-1">
          <p className="text-[17px] font-semibold">{name}</p>
          {isBest && <span className="text-[17px] text-[#3182F6] font-bold">BEST</span>}
        </div>

        <p className="text-[13px] text-[#6B7684]">{price.toLocaleString()}원</p>
        <p className="text-[13px] text-[#6B7684] mb-1 whitespace-normal break-keep">{ingredients}</p>
      </div>

      <Button size="sm" type="button">
        담기
      </Button>
    </div>
  );
};

export default MenuItem;
