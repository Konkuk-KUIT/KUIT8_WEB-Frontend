const ItemCard = ({ item }) => {
  const { title, location, timeAgo, price, image, comments, likes } = item;
  const hasComments = comments > 0;
  const hasLikes = likes > 0;

  return (
    <article className="itemcard">
      <section className="itemcard-content">
        <img src={`/${image}`} alt={title} />
        <section className="itemcard-data">
          <div className="itemcard-info">
            <p className="text-black-3">{title}</p>
            <p className="text-gray-1">
              {location} · {timeAgo}
            </p>
            <p className="text-orange-1">{price}</p>
          </div>
          {(hasComments || hasLikes) && (
            <div className="itemcard-count">
              {hasComments && (
                <span className="itemcard-countcss">
                  <img src="/assets/chat.svg" alt="댓글" />
                  {comments}
                </span>
              )}
              {hasLikes && (
                <span className="itemcard-countcss">
                  <img src="/assets/heart.svg" alt="좋아요" />
                  {likes}
                </span>
              )}
            </div>
          )}
        </section>
      </section>
    </article>
  );
};

export default ItemCard;
