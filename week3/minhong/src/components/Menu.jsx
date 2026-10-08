import Button from "./Button";

const Menu = ({ item }) => {
  const { name, isBest, price, ingredients } = item;
  return (
    <div className="flex w-full items-center gap-3.5 py-4 pr-4 pl-6">
      <div className="size-14 shrink-0 rounded-3xl bg-gray-200" />
      <div className="flex flex-1 flex-col gap-1">
        <div className="flex items-center gap-1.5 text-base font-semibold">
          <span className="text-gray-700">{name}</span>
          {isBest && <span className="text-blue-500">BEST</span>}
        </div>
        <p className="text-xs font-medium text-gray-500">
          {price.toLocaleString()}원
        </p>
        <p className="text-xs font-medium text-gray-500">{ingredients}</p>
      </div>
      <Button type="button" className="shrink-0">
        담기
      </Button>
    </div>
  );
};

export default Menu;
