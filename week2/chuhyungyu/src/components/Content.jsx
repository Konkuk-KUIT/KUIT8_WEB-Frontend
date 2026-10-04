import ItemCard from './ItemCard';

function Content({ items }) {
  return (
    <main className="market-list">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
        />
      ))}
    </main>
  );
}

export default Content;