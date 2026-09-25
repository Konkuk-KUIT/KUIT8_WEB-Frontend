import { useState } from 'react';
import './App.css';

// 아이콘
import searchIcon from '../assets/search.svg';
import listIcon from '../assets/list.svg';
import bellIcon from '../assets/alarm.svg';
import chevronDownIcon from '../assets/chevrondown.svg';
import chatIcon from '../assets/chat.svg';
import heartIcon from '../assets/heart.svg';
import plusIcon from '../assets/plus.svg';
import homeIcon from '../assets/home.svg';
import neighborhoodIcon from '../assets/neighborhood.svg';
import nearbyIcon from '../assets/nearby.svg';
import chattingIcon from '../assets/chatting.svg';
import myCarrotIcon from '../assets/myprofile.svg';

// 상품 이미지
import airpodsImg from '../assets/airpods.png';
import wineImg from '../assets/wine.png';
import sandwichImg from '../assets/sandwich.png';
import iphoneImg from '../assets/iphone.png';
import coffeeImg from '../assets/coffee.png';

// 상품 데이터
const itemList = [
  {
    id: 1,
    image: airpodsImg,
    title: '에어팟 프로',
    location: '군자동',
    time: '3일 전',
    price: 220000,
    chatCount: 3,
    likeCount: 11,
    isSold: false,
  },
  {
    id: 2,
    image: wineImg,
    title: '바이레도 블랑쉬 50ml',
    location: '광진구 구의제3동',
    time: '26초 전',
    price: 4000,
    chatCount: null,
    likeCount: 2,
    isSold: false,
  },
  {
    id: 3,
    image: sandwichImg,
    title: '샌드위치',
    location: '동대문구 휘경동',
    time: '끌올 59초 전',
    price: 8000,
    chatCount: null,
    likeCount: null,
    isSold: false,
  },
  {
    id: 4,
    image: iphoneImg,
    title: '아이폰 13프로맥스',
    location: '군자동',
    time: '1일 전',
    price: 1000000,
    chatCount: null,
    likeCount: null,
    isSold: false,
  },
  {
    id: 5,
    image: coffeeImg,
    title: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: 100000,
    chatCount: null,
    likeCount: null,
    isSold: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Content itemList={itemList} />
      <BottomNav />
    </div>
  );
}

// 헤더
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

// 상품 목록
function Content({ itemList }) {
  return (
    <main className="content">
      {itemList.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </main>
  );
}

// 상품 카드
function ItemCard({ item }) {
  const {
    image,
    title,
    location,
    time,
    price,
    chatCount,
    likeCount,
    isSold,
  } = item;

  return (
    <div className="item-card">
      <img
        className="item-card__image"
        src={image}
        alt={title}
      />

      <div className="item-card__info">
        <div className="item-card__details">
          <p className="item-card__title">{title}</p>

          <p className="item-card__meta">
            {location} · {time}
          </p>

          <p className="item-card__price">
            {price.toLocaleString()}원
          </p>

          {isSold && (
            <span className="item-card__sold-badge">
              거래완료
            </span>
          )}
        </div>

        <div className="item-card__stats">
          {chatCount && (
            <span className="item-card__stat">
              <img src={chatIcon} alt="채팅수" />
              {chatCount}
            </span>
          )}

          {likeCount && (
            <span className="item-card__stat">
              <img src={heartIcon} alt="관심수" />
              {likeCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// 하단 네비게이션
function BottomNav() {
  const navItems = [
    { id: 'home', label: '홈', icon: homeIcon },
    {
      id: 'neighborhood',
      label: '동네생활',
      icon: neighborhoodIcon,
    },
    { id: 'nearby', label: '내 근처', icon: nearbyIcon },
    { id: 'chatting', label: '채팅', icon: chattingIcon },
    { id: 'my', label: '나의 당근', icon: myCarrotIcon },
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

export default App;