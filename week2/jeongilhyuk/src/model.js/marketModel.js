// 강사님이 주신 week2/minseo/src/model.js/marketModel.js 를 그대로 옮겨 온 데이터다.
// 값은 건드리지 않았고 두 가지만 손봤다.
//  1. image 경로를 이 폴더에 넣어 둔 public/assets 의 실제 파일로 바꿨다.
//     원본은 "list/Rectangle 1.png" 처럼 강사님 로컬 경로라 여기서는 열리지 않는다.
//  2. map 의 key 로 쓰려고 id 를 더했다. 뒤의 세 항목은 이미지가 같아서
//     제목이나 이미지 경로만으로는 항목을 구분하기 어렵다.
// 6번, 7번 항목의 이미지가 커피머신과 같은 것은 원본 데이터가 그렇기 때문이다.
// 어울리는 사진을 새로 찾아 넣지 않고 원본을 그대로 뒀다.
const marketModel = {
  location: "군자동",
  items: [
    {
      id: 1,
      title: "에어팟 프로",
      location: "군자동",
      timeAgo: "3일 전",
      price: "220,000원",
      image: "/assets/airpods.jpg",
      comments: 3,
      likes: 11,
      isSold: true,
    },
    {
      id: 2,
      title: "바이레도 블랑쉬 50ml",
      location: "광진구 구의제3동",
      timeAgo: "26초 전",
      price: "4,000원",
      image: "/assets/perfume.jpg",
      comments: 0,
      likes: 2,
      isSold: false,
    },
    {
      id: 3,
      title: "샌드위치",
      location: "동대문구 휘경동",
      timeAgo: "끝물 59초 전",
      price: "8,000원",
      image: "/assets/sandwich.jpg",
      comments: 0,
      likes: 0,
      isSold: false,
    },
    {
      id: 4,
      title: "아이폰 13프로맥스",
      location: "군자동",
      timeAgo: "1일 전",
      price: "1,000,000원",
      image: "/assets/iphone.jpg",
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      id: 5,
      title: "커피머신",
      location: "구리시 교문1동",
      timeAgo: "1초 전",
      price: "100,000원",
      image: "/assets/coffee.jpg",
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      id: 6,
      title: "컴퓨터 구조론",
      location: "서울시 화양동",
      timeAgo: "1분전",
      price: "11,000원",
      image: "/assets/coffee.jpg",
      comments: 0,
      likes: 0,
      isSold: true,
    },
    {
      id: 7,
      title: "맥북 에어 m1 13인치",
      location: "광주",
      timeAgo: "13분 전",
      price: "600,000원",
      image: "/assets/coffee.jpg",
      comments: 4,
      likes: 12,
      isSold: true,
    },
  ],
};

export default marketModel;
