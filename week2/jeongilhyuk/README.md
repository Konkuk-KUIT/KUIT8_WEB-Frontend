# KUIT 8기 웹 2주차 정일혁

2주차 실습(리액트 빠른 시작)과 미션(당근마켓 홈 화면) 두 가지가 들어 있습니다.
지금은 미션 1단계까지 왔습니다.

## 페이지 구성

| 주소 | 내용 | 진입점 |
| --- | --- | --- |
| `/` | 미션. 당근마켓 홈 화면 | `index.html` → `src/main.jsx` → `src/App.jsx` |
| `/practice.html` | 실습. 리액트 빠른 시작 | `practice.html` → `src/practice/main.jsx` → `src/practice/PracticeApp.jsx` |

두 페이지를 함께 빌드하려고 `vite.config.js` 에 진입점을 두 개로 적어 두었습니다.
스타일도 진입점에서만 불러서 섞이지 않습니다. 미션은 `src/App.css`, 실습은
`src/practice/base.css` 와 `src/practice/practice.css` 입니다.

## 미션 1단계에서 한 것

미션 JSX 를 전부 `src/App.jsx` 한 파일에 뒀습니다. Header, Content, ItemCard,
BottomNav 로 쪼개는 것은 다음 단계라서 이번에는 컴포넌트를 만들지 않았습니다.

그린 것은 이렇습니다.

- 헤더: 현재 동네(`군자동`)와 펼침 화살표, 검색, 카테고리, 알림 아이콘
- 목록: 상품 일곱 개를 `map` 으로 돌리고 `key` 에는 모델의 `id` 를 씁니다.
  각 칸은 사진, 제목, 동네, 올린 시각, 가격을 보여 줍니다.
- 거래완료 딱지: `isSold` 가 참인 항목에만 붙습니다.
- 댓글 수와 관심 수: 0 이 아닐 때만 아이콘과 숫자가 나옵니다.
- 하단 탭: 홈, 동네생활, 내 근처, 채팅, 나의 당근
- 오른쪽 아래 주황색 글쓰기 단추

`map` 안에서는 항목 객체를 구조 분해해서 씁니다. 상품의 `location` 은 모델 맨 위의
현재 동네 `location` 과 이름이 겹쳐서 `location: itemLocation` 으로 바꿔 받았습니다.

### 안 되는 단추를 다루는 방법

검색, 카테고리, 알림, 동네 선택, 하단 탭, 글쓰기는 아직 만들지 않은 기능입니다.
누르면 되는 것처럼 보이면 안 되니까 전부 `disabled` 로 두고, 무엇이고 왜 안 눌리는지
`aria-label` 과 `title` 에 적었습니다. 지금 보고 있는 홈 탭에는 `aria-current="page"`
를 붙였습니다. 화면 맨 위에는 화면 낭독기에만 읽히는 안내 문장을 하나 넣었습니다.

거래 기능은 만들지 않았습니다. 이번 미션은 목록을 props 로 그려 보는 연습입니다.

## 데이터 출처

`src/model.js/marketModel.js` 는 강사님이 주신 `week2/minseo/src/model.js/marketModel.js`
를 옮겨 온 것입니다. 값은 그대로 두고 두 가지만 손봤습니다.

1. `image` 경로를 `public/assets` 의 실제 파일로 바꿨습니다. 원본은
   `list/Rectangle 1.png` 처럼 강사님 로컬 경로라 이 프로젝트에서는 열리지 않습니다.
2. `map` 의 `key` 로 쓰려고 `id` 를 1부터 7까지 더했습니다.

원본과 값이 같은지는 두 파일을 함께 불러 `id` 와 `image` 를 뺀 나머지를 비교해서
확인했습니다.

`컴퓨터 구조론` 과 `맥북 에어 m1 13인치` 의 사진이 `커피머신` 과 같은데, 원본 데이터가
세 항목 모두 `list/Rectangle 4.png` 를 가리키고 있기 때문입니다. 어울리는 사진을 새로
찾아 넣지 않고 원본 그대로 뒀습니다.

## 이미지 출처

시안: https://www.figma.com/design/4nvJv24TnSWljlAK79qXgd/당근마켓?node-id=102-83

`public/assets` 의 파일 18개는 전부 이 시안에서 나온 것입니다. 아이콘을 직접 그리거나
비슷한 것으로 바꿔 넣은 것은 하나도 없습니다. 피그마에서 내보낸 파일이거나, 프레임
SVG 에 박혀 있던 원본 바이트를 그대로 꺼낸 것입니다.

| 쓰임 | 파일 |
| --- | --- |
| 상품 사진 | `airpods.jpg`, `perfume.jpg`, `sandwich.jpg`, `iphone.jpg`, `coffee.jpg` |
| 헤더 | `chevron-down.png`, `search.png`, `menu.png`, `bell.png` |
| 카드 | `comments.png`, `heart.png` |
| 하단 탭 | `home.png`, `news.png`, `nearby.png`, `chat.png`, `profile.png` |
| 글쓰기 단추 | `plus.png` |
| 기기 상태 표시줄 | `status-bar.png` |

## 치수

같은 프레임을 SVG 로 내려받아 좌표를 읽고 그대로 옮겼습니다. 원본 프레임은 390x844
흰 배경입니다.

| 부분 | 값 |
| --- | --- |
| 기기 상태 표시줄 | 높이 47 |
| 헤더 | 높이 52, 좌우 여백 16, 아이콘 24 에 간격 15 |
| 목록 | 좌우 여백 16, 사진 110 정사각에 모서리 4, 사진과 글 사이 16 |
| 카드 한 칸 | 위아래 여백 16, 전체 142, 아래에 1px `#EEEEEE` 구분선 |
| 하단 탭 | 높이 58, 아이콘 24 |
| 홈 인디케이터 | 높이 34, 막대 134x5 |
| 글쓰기 단추 | 지름 48, 오른쪽에서 16, 하단 탭에서 16 위 |

색은 가격 `#FF7E36`, 회색 글자 `#8C8C8C`, 구분선 `#EEEEEE` 입니다.

시안에는 카드가 다섯 개만 보이지만 데이터는 일곱 개라 목록이 세로로 스크롤됩니다.
시안에 거래완료 딱지는 없는데 미션 요구사항에 있어서 모델의 `isSold` 를 보고 그렸습니다.

## 실습 부분

실습 코드는 `src/practice/` 로 옮겼습니다. 지운 예제는 없습니다.

| 문서 단계 | 실습 위치 |
| --- | --- |
| 컴포넌트 만들고 중첩하기 | `src/practice/components/Greeting.jsx` |
| JSX 로 마크업 작성하기 | `src/practice/components/JsxRules.jsx` |
| className 으로 스타일 추가하기 | `src/practice/components/ProfileCard.jsx`, `src/practice/practice.css` |
| 데이터 표시하기 | `src/practice/components/StudyInfo.jsx` |
| 조건부 렌더링 (if, 삼항, &&) | `src/practice/components/AttendanceBadge.jsx`, `src/practice/components/AttendancePanel.jsx` |

출처: https://ko.react.dev/learn (컴포넌트 만들고 중첩하기부터 조건부 렌더링까지)

`AttendancePanel` 의 체크박스와 버튼을 눌러 보면 세 가지 조건부 렌더링이 각각 어떻게
바뀌는지 한 화면에서 비교할 수 있습니다.

`useState` 는 빠른 시작의 다음 단계 내용이지만, 조건의 두 갈래를 직접 눌러 보려고
`AttendancePanel` 에서만 미리 썼습니다.

## 실행 방법

```bash
npm install          # 처음 한 번 (package-lock.json 이 있으면 npm ci 도 됩니다)
npm run dev          # 개발 서버, 미션은 http://localhost:5173/ , 실습은 /practice.html
npm run lint         # ESLint
npm run build        # 배포용 빌드, 결과는 dist/
npm run preview      # 빌드 결과 미리 보기
```

## 확인한 것

2026-09-22 에 이 폴더에서 직접 돌린 결과입니다. Node v25.6.1, npm 11.9.0.

| 명령 | 결과 |
| --- | --- |
| `npm run lint` | exit 0, 지적 없음 |
| `npm run build` | exit 0, `dist/index.html` 과 `dist/practice.html` 이 함께 생성, `dist/assets` 에 이미지 18개 |

모델이 강사님 원본과 같은지, 화면이 요구사항대로 그려지는지는 명령으로 확인했습니다.

- 원본 모델과 내 모델을 함께 불러 `id` 와 `image` 를 뺀 나머지를 비교: 같음. `id` 는 일곱 개 모두 다름.
- `react-dom/server` 로 `App` 을 한 번 그려서 결과 문자열을 셈: 상품 칸 7개,
  거래완료 딱지 5개(`isSold` 가 참인 개수와 같음), 댓글 아이콘 2개, 관심 아이콘 3개
  (0 이 아닌 항목 수와 같음), 0 이 그대로 찍힌 자리 없음, 하단 탭 다섯 칸,
  안 만든 단추 10개가 모두 `disabled`, 홈 탭에만 `aria-current="page"`.

브라우저로 열어 눈으로 본 것은 아닙니다. 스타일이 시안과 맞는지 대조하는 것은
다음 단계에서 합니다.

## 남은 것

- 컴포넌트 분리(Header, Content, ItemCard, BottomNav)는 다음 단계입니다.
- 스타일 마무리와 시안 대조도 다음 단계입니다. 지금은 쓸 수 있을 정도의 배치까지입니다.
- 검색, 알림, 탭 이동, 글쓰기 같은 실제 기능은 이번 범위가 아닙니다.
