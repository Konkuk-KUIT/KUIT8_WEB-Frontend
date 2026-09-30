export default function BottomNav() {
  return (
    <footer className="bottom-menu">
      <button className="menu-item">
        <img src="/assets/home.svg" width="21" height="21" alt="홈" />
        <span>홈</span>
      </button>
      <button className="menu-item">
        <img src="/assets/news.svg" width="21" height="21" alt="동네생활" />
        <span>동네생활</span>
      </button>
      <button className="menu-item">
        <img src="/assets/pin.svg" width="21" height="21" alt="내 근처" />
        <span>내 근처</span>
      </button>
      <button className="menu-item">
        <img src="/assets/chat.svg" width="21" height="21" alt="채팅" />
        <span>채팅</span>
      </button>
      <button className="menu-item">
        <img src="/assets/user.svg" width="21" height="21" alt="나의 당근" />
        <span>나의 당근</span>
      </button>
    </footer>
  )
}
