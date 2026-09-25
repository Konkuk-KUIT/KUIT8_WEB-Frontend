import item1 from "../assets/item1.png";
import item2 from "../assets/item2.png";
import item3 from "../assets/item3.png";
import item4 from "../assets/item4.png";
import item5 from "../assets/item5.png";

const marketModel = {
  location: "군자동",
  items: [
    {
      title: "에어팟 프로",
      location: "군자동",
      timeAgo: "3일 전",
      price: "220,000",
      image: item1,
      comments: 3,
      likes: 11,
      isSold: true,
    },
    {
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      timeAgo: "26초 전",
      price: "4,000",
      image: item2,
      comments: 0,
      likes: 2,
      isSold: false,
    },
    {
      title: "샌드위치",
      location: "동대문구 휘경동",
      timeAgo: "끝물 59초 전",
      price: "8,000",
      image: item3,
      comments: 0,
      likes: 0,
      isSold: false,
    },
    {
      title: "아이폰 13프로맥스",
      location: "군자동",
      timeAgo: "1일 전",
      price: "1,000,000",
      image: item4,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "커피머신",
      location: "구리시 교문1동",
      timeAgo: "1초 전",
      price: "100,000",
      image: item5,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "컴퓨터 구조론",
      location: "서울시 화양동",
      timeAgo: "1분전",
      price: "11,000원",
      image: item3,
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      title: "맥북 에어 m1 13인치",
      location: "광주",
      timeAgo: "13분 전",
      price: "600,000",
      image: item4,
      comments: 4,
      likes: 12,
      isSold: true,
    },
  ],
};

export default marketModel;
