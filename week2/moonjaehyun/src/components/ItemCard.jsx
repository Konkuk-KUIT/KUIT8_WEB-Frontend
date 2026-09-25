import "../App.css";
import chatImg from "../assets/chat.svg";
import heartImg from "../assets/heart.svg";

export function ItemCard({
  title,
  location,
  timeAgo,
  price,
  image,
  comments,
  likes,
  isSold,
}) {
  if (!isSold) return <></>;
  return (
    <>
      <div className="item-card">
        <img className="item-card__img" src={image} alt="에어팟 프로" />
        <div className="item-info">
          <div className="item-info__texts">
            <span className="item-info__title">{title}</span>
            <div className="item-info__body">
              <span className="item-info__location">{location}</span>
              <span>.</span>
              <span className="item-info__date">{timeAgo}</span>
            </div>
            <span className="item-info__price">{price}원</span>
          </div>
          <div className="item-info__icons">
            <div className="item-info__chat">
              <img src={chatImg} alt="" />
              <span>{comments}</span>
            </div>
            <div className="item-info__like">
              <img src={heartImg} alt="" />
              <span>
                {likes}
                {isSold}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
