// 상품 목록의 한 칸이다. 항목 하나를 item prop 으로 통째로 받는다.
function ItemCard({ item }) {
  // 이 칸이 쓰는 값만 꺼낸다. 여기서는 location 이 상품의 동네 하나뿐이라
  // App 에 다 몰려 있을 때처럼 itemLocation 으로 이름을 바꿔 받지 않아도 된다.
  const { title, location, timeAgo, price, image, comments, likes, isSold } = item

  return (
    <li className="market-item">
      <img className="item-photo" src={image} alt="" />
      <div className="item-body">
        {/* 팔린 물건에만 거래완료 딱지를 붙인다. */}
        {isSold && <span className="badge-sold">거래완료</span>}
        <h2 className="item-title">{title}</h2>
        <p className="item-meta">
          {location} · {timeAgo}
        </p>
        <p className="item-price">{price}</p>
        {/* 0 이면 아예 그리지 않는다. comments 는 숫자라서 comments > 0 으로
            불린을 만들어야 한다. comments && 로 쓰면 0 이 그대로 찍힌다. */}
        <div className="item-counts">
          {comments > 0 && (
            <span className="count">
              <img src="/assets/comments.png" alt="" />
              {comments}
              <span className="sr-only">개의 댓글</span>
            </span>
          )}
          {likes > 0 && (
            <span className="count">
              <img src="/assets/heart.png" alt="" />
              {likes}
              <span className="sr-only">개의 관심</span>
            </span>
          )}
        </div>
      </div>
    </li>
  )
}

export default ItemCard
