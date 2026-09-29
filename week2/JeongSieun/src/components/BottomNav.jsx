import { useState } from 'react';

import plusIcon from '../../assets/plus.svg';
import homeIcon from '../../assets/home.svg';
import neighborhoodIcon from '../../assets/neighborhood.svg';
import nearbyIcon from '../../assets/nearby.svg';
import chattingIcon from '../../assets/chatting.svg';
import myCarrotIcon from '../../assets/myprofile.svg';

function BottomNav() {
  const navItems = [
    {
      id: 'home',
      label: '홈',
      icon: homeIcon,
    },
    {
      id: 'neighborhood',
      label: '동네생활',
      icon: neighborhoodIcon,
    },
    {
      id: 'nearby',
      label: '내 근처',
      icon: nearbyIcon,
    },
    {
      id: 'chatting',
      label: '채팅',
      icon: chattingIcon,
    },
    {
      id: 'my',
      label: '나의 당근',
      icon: myCarrotIcon,
    },
  ];

  const [activeId] = useState('nearby');

  return (
    <nav className="bottom-nav">
      <button className="bottom-nav__fab">
        <img src={plusIcon} alt="글쓰기" />
      </button>

      <div className="bottom-nav__nav-bar">
        {navItems.map((nav) => (
          <div
            key={nav.id}
            className={`bottom-nav__item ${
              activeId === nav.id ? 'active' : ''
            }`}
          >
            <img src={nav.icon} alt={nav.label} />
            <span>{nav.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;