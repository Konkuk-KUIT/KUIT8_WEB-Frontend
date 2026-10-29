# KUIT 8기 Web 6주차

6주차에는 5주차까지 구현한 화면과 기능을 유지하면서 서버 API를 연동하고 프론트엔드를 Vercel에 배포합니다.

## 이번 주차 학습 내용

- Fetch 또는 Axios를 이용한 API 요청
- HTTP 요청·응답과 타입
- TanStack Query 기초
- 로딩·오류·성공 화면 처리
- 환경변수를 이용한 API 주소 관리
- Vercel 배포

## 1. 강의 전 준비

### 자신의 week5 프로젝트 복사

새로운 React 프로젝트를 만들지 않고 자신이 미션을 완료한 5주차 폴더에서 이어서 작업합니다.

```text
week5/자기이름 → week6/자기이름
```

`node_modules`와 `dist`는 복사하지 않습니다. 이후 모든 명령은 `week6/자기이름` 안에서 실행합니다.

### 패키지 설치

```bash
npm install
npm install axios @tanstack/react-query
```

파트장 실습에서는 Axios를 사용합니다. 가게 메뉴 리스트와 주문서 미션에서는 Fetch와 Axios 중 하나를 선택할 수 있습니다.

### API 환경변수

프로젝트 루트의 `.env.local`과 제출용 `.env.example`에 다음 주소를 작성합니다.

```env
VITE_API_BASE_URL=https://kuit-8th-mission-server.vercel.app
```

`.env.local`은 커밋하지 않습니다. 환경변수를 변경한 뒤에는 개발 서버를 다시 실행합니다.

### 준비 완료 확인

```bash
npm run lint
npm run build
npm run dev
```

- [ ] 5주차 화면과 기능이 그대로 동작하는가?
- [ ] 필요한 패키지가 설치되어 있는가?
- [ ] 환경변수와 실행 상태를 확인했는가?

이 단계에서는 아직 페이지를 API에 연결하거나 파트장의 완성 폴더를 복사하지 않습니다.

## 2. 파트장 실습 범위

강의에서는 파트장과 함께 `/store` 가게 리스트를 구현합니다.

- 가게 목록 GET 요청
- 로딩·오류·성공 화면
- 서버 목록과 기존 검색·좋아요 기능 연결
- Vercel 배포에 필요한 설정

`week6/sanghyun`은 파트장 완성 예시입니다. 폴더 전체를 복사하거나 자신의 Store, Cart, Router 등 기존 코드를 파트장 코드로 덮어쓰지 않습니다.

## 3. API

### Base URL

```text
https://kuit-8th-mission-server.vercel.app
```

| Method | Path                   | 사용 화면        |
| ------ | ---------------------- | ---------------- |
| `GET`  | `/api/stores`          | 가게 리스트      |
| `GET`  | `/api/stores/:storeId` | 가게 메뉴 리스트 |
| `POST` | `/api/orders`          | 주문서           |

상세 요청·응답은 워크북의 API 명세를 확인합니다.

교육용 서버는 주문 결과를 실제로 저장하지 않습니다.

가게 메뉴 데이터는 1~3번 가게까지만 제공됩니다. 옐로우푸드 샐러드(ID 4)부터는 메뉴가 없는 것이 정상이며, 가게 메뉴 리스트와 주문 미션은 1~3번 가게로 확인합니다.

## 4. 미션

파트장 실습을 마친 뒤 자신의 5주차 가게 메뉴 리스트와 주문서에 API를 연결합니다.

### 공통

- 자신의 5주차 UI와 기능을 유지합니다.
- Fetch와 Axios 중 하나를 선택합니다.
- 연결한 화면에서는 Mock Data 대신 API 응답을 표시합니다.
- 요청과 응답은 API 명세를 따릅니다.

Fetch는 `404`, `400` 응답에서도 자동으로 오류가 발생하지 않으므로 HTTP 상태를 확인해야 합니다.

### 4-1. 가게 메뉴 리스트

확인 경로: `/store/:storeId`

- [ ] URL의 `storeId`에 해당하는 가게와 메뉴를 `GET /api/stores/:storeId`로 조회합니다.
- [ ] 요청 중에는 로딩 UI를 표시합니다.
- [ ] 성공 시 API 응답으로 가게 정보와 메뉴를 표시합니다.
- [ ] 메뉴 담기와 장바구니 등 5주차 기능을 유지합니다.
- [ ] `404 STORE_NOT_FOUND` 응답에는 5주차에서 만든 가게 없음 UI와 목록 이동 버튼을 재사용합니다.

가게 목록에는 정상 ID만 연결되어 있으므로 존재하지 않는 숫자 ID를 주소창에 직접 입력해 확인합니다.

```text
예: /store/999
```

이때 Network에서 `GET /api/stores/999` 요청과 `404` 응답이 확인되어야 합니다. 테스트용 오류 버튼은 만들지 않습니다.

### 4-2. 주문서

확인 경로: `/cart`

- [ ] 기존 결제 버튼에서 최소 주문금액에 따른 비활성 조건만 제거합니다.
- [ ] 결제 버튼 클릭 시 API 명세에 맞춰 `POST /api/orders` 요청을 보냅니다.
- [ ] 요청 중에는 중복 요청을 막기 위해 결제 버튼을 비활성화합니다.
- [ ] 성공 시 주문 접수 여부와 서버가 반환한 결제금액을 표시합니다.
- [ ] 실패 시 오류를 안내하고, `400 MINIMUM_ORDER_NOT_MET` 응답에는 서버 메시지를 표시합니다.

장바구니가 비었거나 타이머가 만료된 경우의 기존 비활성 조건은 유지합니다.

## 5. Vercel 배포

미션을 완료한 뒤 자신의 프론트엔드를 Vercel에 배포합니다. 백엔드는 별도로 배포하지 않습니다.

프로젝트 루트에 `vercel.json`을 추가합니다.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

- `$schema`는 에디터의 문법 검사와 자동완성을 위한 Vercel 공식 JSON Schema 주소입니다. 개인 주소가 아니며 웹 배포에서도 수정하지 않습니다.
- `rewrites`는 `/store/1`처럼 React Router 경로로 직접 접속하거나 새로고침해도 `index.html`을 보여주기 위한 설정입니다.

Vercel 프로젝트에도 다음 환경변수를 등록합니다.

```env
VITE_API_BASE_URL=https://kuit-8th-mission-server.vercel.app
```

Git 저장소를 가져와 배포한다면 자신의 프로젝트 폴더인 `week6/자기이름`을 Root Directory로 지정합니다.

### 배포 파일 관리

`.gitignore`에 다음 항목이 포함되어 있는지 확인합니다. `*.local`에는 `.env.local`이 포함됩니다.

```gitignore
node_modules
dist
*.local
.vercel
```

| 구분 | 파일·폴더 | 이유 |
| --- | --- | --- |
| 커밋 O | 소스 코드 | 구현 결과이므로 공유해야 합니다. |
| 커밋 O | `package.json`, `package-lock.json` | 같은 패키지와 버전으로 설치하기 위해 필요합니다. |
| 커밋 O | `.env.example` | 필요한 환경변수 이름과 예시를 안내합니다. |
| 커밋 O | `vercel.json` | Vercel 웹 배포가 Routing 설정을 읽는 파일입니다. |
| 커밋 X | `.env.local` | 개인 개발 환경에서 사용하는 실제 환경변수 파일입니다. |
| 커밋 X | `node_modules` | `npm install`로 다시 만들 수 있습니다. |
| 커밋 X | `dist` | `npm run build`로 다시 만드는 빌드 결과물입니다. |
| 커밋 X | `.vercel` | Vercel 프로젝트 연결 정보가 담기는 로컬 폴더입니다. |

### 배포 확인

- [ ] `/store`, `/store/1`, `/cart`가 정상 동작하는가?
- [ ] 각 주소에서 새로고침해도 Vercel 404가 발생하지 않는가?
- [ ] API 요청이 localhost가 아닌 배포 백엔드로 전송되는가?

## 6. 제출 전 확인

- [ ] `npm run lint`와 `npm run build`가 성공하는가?
- [ ] 개발 서버와 Vercel 배포 주소에서 미션을 확인했는가?
- [ ] 프론트엔드 소스 코드와 Vercel 배포 주소를 제출했는가?
