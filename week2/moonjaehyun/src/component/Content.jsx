import "../App.css";
import { ItemCard } from "./ItemCard";

export function Content() {
  return (
    <>
      <div className="item-list">
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
        <ItemCard></ItemCard>
      </div>
    </>
  );
}
