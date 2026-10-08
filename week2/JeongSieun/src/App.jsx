import './App.css';

// 상품 이미지
import airpodsImg from '../assets/airpods.png';
import wineImg from '../assets/wine.png';
import sandwichImg from '../assets/sandwich.png';
import iphoneImg from '../assets/iphone.png';
import coffeeImg from '../assets/coffee.png';

// 컴포넌트
import Header from './components/header';
import Content from './components/content';
import BottomNav from './components/BottomNav';

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

export default App;