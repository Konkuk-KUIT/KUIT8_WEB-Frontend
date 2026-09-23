const ItemCard = ({ item }) => {
  const hasComments = item.comments > 0;
  const hasLikes = item.likes > 0;

  return (
    <article className="itemcard">
      <section className="itemcard-content">
        <img src={`/${item.image}`} alt={item.title} />
        <section className="itemcard-data">
          <div className="itemcard-info">
            <p className="text-black-3">{item.title}</p>
            <p className="text-gray-1">
              {item.location} · {item.timeAgo}
            </p>
            <p className="text-orange-1">{item.price}</p>
          </div>
          {(hasComments || hasLikes) && (
            <div className="itemcard-count">
              {hasComments && (
                <span className="itemcard-countcss">
                  <img src="/assets/chat.svg" alt="댓글" />
                  {item.comments}
                </span>
              )}
              {hasLikes && (
                <span className="itemcard-countcss">
                  <img src="/assets/heart.svg" alt="좋아요" />
                  {item.likes}
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
