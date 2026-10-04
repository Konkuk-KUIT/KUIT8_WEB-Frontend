import ItemCard from "./ItemCard";

const Content = ({ items }) => {
  return (
    <main>
      {items.map((item) => {
        return (
          <ItemCard
            item = {item}
          />
        );
      })}
    </main>
  );
};

export default Content;
