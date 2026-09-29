import searchIcon from '../../assets/search.svg';
import listIcon from '../../assets/list.svg';
import bellIcon from '../../assets/alarm.svg';
import chevronDownIcon from '../../assets/chevrondown.svg';

function Header() {
  return (
    <header className="header">
      <button className="header__location">
        군자동
        <img src={chevronDownIcon} alt="지역 선택" />
      </button>

      <div className="header__icons">
        <img src={searchIcon} alt="검색" />
        <img src={listIcon} alt="목록" />
        <img src={bellIcon} alt="알림" />
      </div>
    </header>
  );
}

export default Header;