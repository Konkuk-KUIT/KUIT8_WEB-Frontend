function ItemCard({item}) {
    return(
        <article className="item-card" key={item.title}>
            {/* 상품 사진 영역 */}
            {/*src="/list/Rectangle 1.png"*/}
            <img
              className='item-image'
              src={`/${item.image}`}  
              alt={item.title}
            />
          

            <div className="item-info">
              {/*상품 정보 영역*/}
              <div className="item-details">
                <h2>{item.title}</h2>
                <p>{item.location} · {item.timeAgo}</p>
                <span className='item-price'>{item.price}</span>
              </div>
              

              {/*댓글, 좋아요 영역*/}
              {/* &&를 사용해서, 조건이 참일 경우에만 렌더링 해보자 */}
              
              {(item.comments>0||item.likes>0) &&(
                <div className="item-reaction">

                  {item.comments>0 && (
                    <div className="reaction-item">
                      <img src="/icons/comment.svg" alt="댓글" />
                      <span>{item.comments}</span>
                    </div>
                  )}


                  {item.likes>0 && (
                    <div className="reaction-item">
                      <img src='/icons/heart.svg' alt='좋아요' />
                      <span>{item.likes}</span>
                    </div>
                  )}
                </div>
                )}
            </div>
          </article>
    )
}

export default ItemCard