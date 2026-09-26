import ItemCard from "./ItemCard.jsx";

function Content({ items }) {
  return (
    <main className="container" aria-label="중고 상품 목록">
      {items.map((item) => (
        <ItemCard key={item.title} item={item} />
      ))}
    </main>
  );
}

export default Content;
