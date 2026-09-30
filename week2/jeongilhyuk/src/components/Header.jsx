// 화면 맨 위 줄이다. 왼쪽에 현재 동네, 오른쪽에 검색·카테고리·알림 아이콘이 있다.
// 현재 동네는 모델을 직접 읽지 않고 App 에서 props 로 받는다.
function Header({ location }) {
  return (
    <header className="market-header">
      <button
        type="button"
        className="location-button"
        disabled
        title="동네 선택은 아직 만들지 않았습니다"
        aria-label={`현재 동네 ${location}, 동네 선택은 아직 만들지 않았습니다`}
      >
        {location}
        <img className="location-chevron" src="/assets/chevron-down.png" alt="" />
      </button>

      <div className="header-actions">
        <button
          type="button"
          className="icon-button"
          disabled
          title="검색은 아직 만들지 않았습니다"
          aria-label="검색, 아직 만들지 않았습니다"
        >
          <img src="/assets/search.png" alt="" />
        </button>
        <button
          type="button"
          className="icon-button"
          disabled
          title="카테고리는 아직 만들지 않았습니다"
          aria-label="카테고리, 아직 만들지 않았습니다"
        >
          <img src="/assets/menu.png" alt="" />
        </button>
        <button
          type="button"
          className="icon-button"
          disabled
          title="알림은 아직 만들지 않았습니다"
          aria-label="알림, 아직 만들지 않았습니다"
        >
          <img src="/assets/bell.png" alt="" />
        </button>
      </div>
    </header>
  )
}

export default Header
