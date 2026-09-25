function BottomNav() {
    return (
        // 하단 바
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
    )
}

export default BottomNav