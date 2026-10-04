import ItemCard from './ItemCard';

function Content({ itemList }) {
  return (
    <main className="content">
      {itemList.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}

export default Content;