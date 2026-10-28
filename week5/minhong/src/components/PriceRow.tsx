type PriceRowProps = {
  label : string;
  price : number;
  total?: boolean;
}

const PriceRow = ({ label, price, total = false } : PriceRowProps) => {
  return (
    <div
      className={`flex w-[390px] justify-between px-6 ${total ? "h-14 pt-4 text-gray-600" : "h-9 pt-2"}`}
    >
      <dt className={total ? "" : "text-gray-400"}>{label}</dt>
      <dd className={total ? "font-semibold" : "text-gray-600"}>
        {price.toLocaleString()}원
      </dd>
    </div>
  );
};

export default PriceRow;
