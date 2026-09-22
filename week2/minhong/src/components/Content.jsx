import ItemCard from "./ItemCard";

const Content = ({ items }) => {
  return (
    <main>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            title={item.title}
            location={item.location}
            timeAgo={item.timeAgo}
            price={item.price}
            image={item.image}
            comments={item.comments}
            likes={item.likes}
            isSold={item.isSold}
          />
        );
      })}
    </main>
  );
};

export default Content;
