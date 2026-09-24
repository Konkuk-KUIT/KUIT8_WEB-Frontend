import './App.css'
import marketModel from './model.js/marketModel'

function App() {
  //const item=marketModel.items[0]


  return (
    <div className='market'>
      {/*상단 헤더*/}
      <header className="header">
        <div className="location">
          <h1 className='location-name'>{marketModel.location}</h1>
          <img src="/icons/down-chevron.svg" alt="아래 화살표" />
        </div>
        
        <div className="header-icons">
          <img src="/icons/search.svg" alt="검색" />
          <img src="/icons/menu.svg" alt="메뉴" />
          <img src="/icons/bell.svg" alt="알림" />
        </div>
      </header>

      {/*상품들 배열 영역*/}
      <main className="content">
        {/* map을 사용한 부분! 그리고 조건부 렌더링도 */}
       {marketModel.items
        .filter((item)=>item.isSold===true)
        .map((item) => (
          <article className="item-card" key={item.title}>
            {/*상품 사진 영역*/}
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
        ))}
      </main>

      {/* 하단 바 */}
      <nav className="bottom-bar">
        <div className="bottom-bar__item">
          <img
            className="bottom-bar__icon"
            src="/icons/home.svg"
            alt="집 아이콘"
          />
          <span className="bottom-bar__label">홈</span>
        </div>

        <div className="bottom-bar__item">
          <img
            className="bottom-bar__icon"
            src="/icons/news.svg"
            alt="뉴스 아이콘"
          />
          <span className="bottom-bar__label">동네생활</span>
        </div>

        <div className="bottom-bar__item">
          <img
            className="bottom-bar__icon"
            src="/icons/place-marker.svg"
            alt="위치 아이콘"
          />
          <span className="bottom-bar__label">내 근처</span>
        </div>

        <div className="bottom-bar__item">
          <img
            className="bottom-bar__icon"
            src="/icons/chat.svg"
            alt="채팅 아이콘"
          />
          <span className="bottom-bar__label">채팅</span>
        </div>

        <div className="bottom-bar__item">
          <img
            className="bottom-bar__icon"
            src="/icons/user.svg"
            alt="프로필 아이콘"
          />
          <span className="bottom-bar__label">나의 당근</span>
        </div>
      </nav>
    </div>
  )
}

export default App