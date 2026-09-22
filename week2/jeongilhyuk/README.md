# KUIT 8기 웹 2주차 정일혁

Vite + React 환경을 만들고, 리액트 공식 빠른 시작 문서의 조건부 렌더링까지를 실습한 결과입니다.

출처: https://ko.react.dev/learn (컴포넌트 만들고 중첩하기부터 조건부 렌더링까지)

## 지금까지 한 범위

실습만 들어 있습니다. 미션은 아직 구현하지 않았습니다.

| 문서 단계 | 실습 위치 |
| --- | --- |
| 컴포넌트 만들고 중첩하기 | `src/components/Greeting.jsx` |
| JSX 로 마크업 작성하기 | `src/components/JsxRules.jsx` |
| className 으로 스타일 추가하기 | `src/components/ProfileCard.jsx`, `src/styles/practice.css` |
| 데이터 표시하기 | `src/components/StudyInfo.jsx` |
| 조건부 렌더링 (if, 삼항, &&) | `src/components/AttendanceBadge.jsx`, `src/components/AttendancePanel.jsx` |

`AttendancePanel` 의 체크박스와 버튼을 눌러 보면 세 가지 조건부 렌더링이 각각 어떻게
바뀌는지 한 화면에서 비교할 수 있습니다. 체크박스는 스페이스, 버튼은 엔터나 스페이스로
눌러도 되고 탭으로 이동하면 초점 테두리가 보입니다.

`useState` 는 빠른 시작의 다음 단계 내용이지만, 조건의 두 갈래를 직접 눌러 보려고
`AttendancePanel` 에서만 미리 썼습니다.

## 페이지 구성

- `/practice.html` 이 실습 페이지입니다. React 로 그립니다.
- `/` 는 지금은 실습으로 가는 안내 페이지입니다. 미션은 나중에 여기에 붙일 예정입니다.
- 두 페이지를 함께 빌드하려고 `vite.config.js` 에 진입점을 두 개로 적어 두었습니다.

## 실행 방법

```bash
npm install          # 처음 한 번 (package-lock.json 이 있으면 npm ci 도 됩니다)
npm run dev          # 개발 서버, 실습은 http://localhost:5173/practice.html
npm run lint         # ESLint
npm run build        # 배포용 빌드, 결과는 dist/
npm run preview      # 빌드 결과 미리 보기
```

## 확인한 것

2026-09-22 에 이 폴더에서 직접 돌린 결과입니다. Node v25.6.1, npm 11.9.0.

| 명령 | 결과 |
| --- | --- |
| `npm ci` | exit 0, 144개 패키지 설치 |
| `npm run lint` | exit 0, 지적 없음 |
| `npm run build` | exit 0, `dist/index.html` 과 `dist/practice.html` 이 함께 생성 |
| `npm run dev` (5183 포트) + curl | `/`, `/practice.html`, `/src/main.jsx` 모두 200 |

빌드 결과물에 조건부 렌더링 세 갈래의 문구가 모두 들어 있는 것까지는 확인했습니다.
Chrome에서 체크박스와 공지 버튼을 클릭하고 키보드 스페이스/엔터로 되돌렸습니다. 출석·결석(if), 안내 문장(삼항), 공지 표시·숨김(&&)이 모두 상태에 따라 바뀌었습니다.

## 남은 것

- 2주차 미션은 구현하지 않았습니다.
- 목록 렌더링, 이벤트 처리, 훅 등 조건부 렌더링 이후 단계는 이번 범위가 아닙니다.
