const ItemCard = ({ item }) => {
  const { title, location, timeAgo, price, image, comments, likes, isSold } =
    item;
  return (
    isSold && (
      <section className="product__item">
        <img src={image} alt="" className="product__item-img" />
        <div className="product__item-box">
          <div className="box__text">
            <h3 className="box__text-title">{title}</h3>
            <div className="box__text-info">
              <p>{location + " · " + timeAgo}</p>
            </div>
            <p className="box__text-amount">{price}</p>
          </div>
          <div className="box_btns">
            {comments > 0 && (
              <div className="box_btns-item">
                <img src="../assets/bx_chat.svg" alt="" />
                <p>{comments}</p>
              </div>
            )}
            {likes > 0 && (
              <div className="box_btns-item">
                <img src="../assets/heart-outlined.svg" alt="" />
                <p>{likes}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default ItemCard;
