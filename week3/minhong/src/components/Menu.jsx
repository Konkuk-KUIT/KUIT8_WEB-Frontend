import Button from "./Button";

const Menu = ({ item }) => {
  const { name, isBest, price, ingredients } = item;
  return (
    <div className="w-96 h-28 relative overflow-hidden">
      <div className="left-[94px] top-[16px] absolute justify-start text-gray-700 text-base font-semibold font-['Pretendard']">
        {name}
      </div>
      <div className="left-[193px] top-[16px] absolute justify-start text-blue-500 text-base font-semibold font-['Pretendard']">
        {isBest && "BEST"}
      </div>
      <div className="left-[94px] top-[41px] absolute justify-start text-gray-500 text-xs font-medium font-['Pretendard']">
        {price.toLocaleString()}원
      </div>
      <div className="w-52 left-[94px] top-[62px] absolute justify-start text-gray-500 text-xs font-medium font-['Pretendard']">
        {ingredients}
      </div>
      <div className="size-14 left-[24px] top-[28px] absolute bg-gray-200 rounded-3xl" />
      <div className="absolute right-4 top-[60px] -translate-y-1/2">
        <Button type="button">담기</Button>
      </div>
    </div>
  );
};

export default Menu;
