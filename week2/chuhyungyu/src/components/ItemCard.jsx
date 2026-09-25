function ItemCard({ item }) {
  return (
    <article className="market-item">
      <img
        className="market-item-image"
        src={'/assets/' + item.image}
        alt={item.title}
      />

      <div className="market-item-content">
        <div className="market-item-info">
          <h2 className="market-item-title">
            {item.title}
          </h2>

          <p className="market-item-meta">
            {item.location} · {item.timeAgo}
          </p>

          <strong className="market-item-price">
            {item.price}
          </strong>
        </div>

        <div className="market-item-status">
          {item.comments > 0 && (
            <div className="market-item-count">
              <img src="/assets/chat.svg" alt="" />
              <span>{item.comments}</span>
            </div>
          )}

          {item.likes > 0 && (
            <div className="market-item-count">
              <img src="/assets/likes.svg" alt="" />
              <span>{item.likes}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemCard;