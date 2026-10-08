function ItemCard({ item }) {
  return (
    <article className="market-item">
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="item-info">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-details">
          {item.location} · {item.timeAgo}
        </p>
        <p className="item-price">{item.price}</p>
        <div className="item-stats">
          {item.comments > 0 && (
            <span className="item-comments">
              <img src="./comment.svg" alt="댓글" />
              {item.comments}
            </span>
          )}
          {item.likes > 0 && (
            <span className="item-likes">
              <img src="./heart.svg" alt="좋아요" />
              {item.likes}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
