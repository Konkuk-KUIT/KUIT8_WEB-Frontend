import chatIcon from '../../assets/chat.svg';
import heartIcon from '../../assets/heart.svg';

function ItemCard({ item }) {
  const {
    image,
    title,
    location,
    time,
    price,
    chatCount,
    likeCount,
    isSold,
  } = item;

  return (
    <div className="item-card">
      <img
        className="item-card__image"
        src={image}
        alt={title}
      />

      <div className="item-card__info">
        <div className="item-card__details">
          <p className="item-card__title">{title}</p>

          <p className="item-card__meta">
            {location} · {time}
          </p>

          <p className="item-card__price">
            {price.toLocaleString()}원
          </p>

          {isSold && (
            <span className="item-card__sold-badge">
              거래완료
            </span>
          )}
        </div>

        <div className="item-card__stats">
          {chatCount && (
            <span className="item-card__stat">
              <img src={chatIcon} alt="채팅수" />
              {chatCount}
            </span>
          )}

          {likeCount && (
            <span className="item-card__stat">
              <img src={heartIcon} alt="관심수" />
              {likeCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemCard;