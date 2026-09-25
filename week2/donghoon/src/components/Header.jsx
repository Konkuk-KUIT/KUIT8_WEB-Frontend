function Header({location}) {
    return (
        // 상단 헤더
      <header className="header">
        <div className="location">
          <h1 className='location-name'>{location}</h1>
          <img src="/icons/down-chevron.svg" alt="아래 화살표" />
        </div>
        
        <div className="header-icons">
          <img src="/icons/search.svg" alt="검색" />
          <img src="/icons/menu.svg" alt="메뉴" />
          <img src="/icons/bell.svg" alt="알림" />
        </div>
      </header>
    )
}
//Header가 {location}으로 App으로부터 정보를 받음
//이게 Props. App이 자식 컴포넌트로 정보를 넘겨주는 방법

export default Header