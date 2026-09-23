import ItemCard from "./ItemCard";

const Content = ({ items }) => {
  return (
    <main className="content">
      {items.map((item) => (
        <ItemCard key={item.title} item={item} />
      ))}
    </main>
  );
};

export default Content;
