import "../App.css";
import { ItemCard } from "./ItemCard";

export function Content({ items }) {
  const listItems = items.map((item) => <ItemCard {...item}></ItemCard>);
  return (
    <>
      <div className="item-list">{listItems}</div>
    </>
  );
}
