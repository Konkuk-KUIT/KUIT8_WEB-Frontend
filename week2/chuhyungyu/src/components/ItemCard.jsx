function ItemCard({ item }) {
  const {
    title,
    location,
    timeAgo,
    price,
    image,
    comments,
    likes,
    isSold,
  } = item;

  return (
    <article className="market-item">
      <img
        className="market-item-image"
        src={'/assets/' + image}
        alt={title}
      />

      <div className="market-item-content">
        <div className="market-item-info">
          <h2 className="market-item-title">{title}</h2>

          <p className="market-item-meta">
            {location} · {timeAgo}
          </p>

          {isSold && <span>판매완료</span>}

          <strong className="market-item-price">
            {price}
          </strong>
        </div>

        <div className="market-item-status">
          {comments > 0 && (
            <div className="market-item-count">
              <img src="/assets/chat.svg" alt="" />
              <span>{comments}</span>
            </div>
          )}

          {likes > 0 && (
            <div className="market-item-count">
              <img src="/assets/likes.svg" alt="" />
              <span>{likes}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ItemCard;