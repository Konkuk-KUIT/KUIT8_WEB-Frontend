// 하단 탭 다섯 칸. 지금은 홈 화면만 있어서 나머지는 눌러도 갈 곳이 없다.
// 이 목록은 다른 컴포넌트가 쓰지 않아서 App 이 아니라 여기서 들고 있는다.
const navItems = [
  { id: 'home', label: '홈', icon: '/assets/home.png' },
  { id: 'town', label: '동네생활', icon: '/assets/news.png' },
  { id: 'nearby', label: '내 근처', icon: '/assets/nearby.png' },
  { id: 'chat', label: '채팅', icon: '/assets/chat.png' },
  { id: 'my', label: '나의 당근', icon: '/assets/profile.png' },
]

const CURRENT_TAB = 'home'

function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="주요 메뉴">
      {navItems.map(({ id, label, icon }) => {
        const isCurrent = id === CURRENT_TAB
        return (
          <button
            type="button"
            className="nav-item"
            key={id}
            disabled
            aria-current={isCurrent ? 'page' : undefined}
            title={isCurrent ? `${label} (지금 보고 있는 화면)` : `${label} 화면은 아직 만들지 않았습니다`}
            aria-label={isCurrent ? `${label}, 지금 보고 있는 화면` : `${label}, 아직 만들지 않았습니다`}
          >
            <img src={icon} alt="" />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
