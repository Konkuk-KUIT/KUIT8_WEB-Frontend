# KUIT 8기 Web 6주차

6주차에는 5주차까지 완성한 화면과 전역 상태를 유지하면서 서버 API를 연동합니다. Axios로 HTTP 요청을 보내고 TanStack Query로 Server State의 로딩, 오류, 성공 상태를 관리한 뒤 Vercel에 배포합니다.

## 이번 주차 학습 내용

- Axios를 이용한 API 요청
- HTTP 요청과 응답 타입 작성
- TanStack Query를 이용한 Server State 관리
- 로딩·오류·성공 상태에 따른 화면 처리
- 환경변수를 이용한 API 주소 관리
- Vercel 배포와 배포 환경 점검

## 이번 주차에서 하지 않는 것

- 기존 화면의 디자인을 새로 구현하지 않습니다.
- Router와 Zustand 구조를 처음부터 다시 작성하지 않습니다.
- 프론트엔드에서 서버 데이터를 임의로 수정하지 않습니다.
- 인증, 실제 결제, 데이터베이스 연동은 구현하지 않습니다.
- 모든 HTTP Method를 억지로 사용하지 않습니다.

## 1. 자신의 week5 프로젝트에서 시작

새로운 React 프로젝트를 만들지 않습니다. 자신이 미션을 완료한 5주차 폴더를 복사하여 이어서 작업합니다.

```text
week5/자기이름 → week6/자기이름
```

폴더 복사, `node_modules` 제외, TypeScript 파일 확인 등 공통 준비 과정은 [week4 README](../week4/README.md)를 참고합니다. 이후 모든 명령은 `week6/자기이름` 안에서 실행합니다.

## 2. 패키지 설치

기존 `package.json`은 유지하고 6주차에 필요한 패키지만 추가합니다.

```bash
npm install axios @tanstack/react-query
```

- Axios는 실제 HTTP 요청을 담당합니다.
- TanStack Query는 요청의 로딩, 오류, 성공 데이터와 캐시를 관리합니다.
- 5주차에 작성한 Zustand 장바구니는 Client State이므로 그대로 유지합니다.

## 3. API 환경변수 설정

프로젝트 루트에 `.env.local`을 만들고 API 주소를 작성합니다.

```env
VITE_API_BASE_URL=http://localhost:3001
```

백엔드 배포 후에는 localhost 대신 제공된 배포 주소를 사용합니다. 환경변수를 수정한 뒤에는 개발 서버를 다시 실행해야 합니다.

`.env.local`은 개인 환경 파일이므로 커밋하지 않습니다. 제출할 때는 변수 이름만 담긴 `.env.example`을 함께 둡니다.

## 4. 공통 설정

`main.tsx`에서 `QueryClient`를 한 번 생성하고 애플리케이션을 `QueryClientProvider`로 감쌉니다. 각 페이지에서 새로운 QueryClient를 만들지 않습니다.

API 요청 코드는 컴포넌트 안에 직접 작성하지 않고 다음처럼 분리합니다.

```text
src/
├── api/
│   ├── client.ts       # Axios 공통 설정
│   └── stores.ts       # 가게 API 요청 함수
└── pages/
    └── Stores/
        └── Stores.tsx  # TanStack Query와 화면 상태 처리
```

## 5. API 계약

6주차에서 사용하는 API는 다음 세 개입니다. 실제 배포 주소와 상세 요청·응답은 API 명세서에서 제공합니다.

| Method | Path | 사용 화면 |
| --- | --- | --- |
| `GET` | `/api/stores` | 가게 리스트 |
| `GET` | `/api/stores/:storeId` | 가게 메뉴 리스트 |
| `POST` | `/api/orders` | 주문서 |

파트장 예시는 `/store`에서 가게 목록 GET 요청을 구현합니다. 검색과 좋아요는 서버에서 받은 목록을 사용하되 4주차에 구현한 Local State를 그대로 유지합니다.

가게 메뉴 리스트와 주문서는 미션에서 각각 상세 조회와 주문 요청을 연동합니다. 세부 요구사항은 백엔드 배포와 API 명세 확정 후 이 문서에 추가합니다.

## 6. 파트장 코드 반영 원칙

`week6/sanghyun`은 가게 리스트 API 연동 예시입니다. 자신의 프로젝트 전체를 파트장 폴더로 교체하지 않습니다.

다음 파일은 가게 리스트 구현 파일이므로 같은 경로에 파일 전체 내용을 반영할 수 있습니다.

```text
src/api/client.ts
src/api/stores.ts
src/pages/Stores/Stores.tsx
src/components/StoreItem.tsx
```

다음 파일은 자신의 기존 코드를 유지하고 필요한 설정만 직접 반영합니다.

```text
package.json        # 패키지 설치 결과만 반영
src/main.tsx        # QueryClientProvider만 추가
src/types/stores.ts # API 응답에 필요한 타입만 확인
```

다음 파일과 상태는 파트장 코드로 덮어쓰지 않습니다.

```text
src/pages/Home/Home.tsx
src/pages/Store/Store.tsx
src/pages/Cart/Cart.tsx
src/pages/Router.tsx
5주차에 작성한 Zustand store
```

가게 메뉴 리스트와 주문서는 각자 5주차에 구현한 화면과 상태를 그대로 이어서 사용합니다. `src/models/stores.ts`도 미션 API를 연동하기 전까지 삭제하지 않습니다.

## 7. 현재 단계 확인

다음 명령으로 기본 상태를 확인합니다.

```bash
npm run lint
npm run build
npm run dev
```

- [ ] Axios와 TanStack Query가 설치되어 있는가?
- [ ] `QueryClientProvider`가 애플리케이션 전체를 감싸는가?
- [ ] API 주소가 환경변수로 분리되어 있는가?
- [ ] 가게 리스트가 더미 배열을 직접 import하지 않는가?
- [ ] 로딩·오류·성공 화면이 구분되어 있는가?
- [ ] 검색과 좋아요 기능이 그대로 유지되는가?
- [ ] Store·Cart의 기존 구현이 보존되어 있는가?
- [ ] `npm run lint`와 `npm run build`가 성공하는가?

## 8. 제출 전 주의사항

- `.env.local`, `node_modules`, `dist`를 커밋하지 않습니다.
- 다른 사람의 폴더와 파트장 예시 폴더를 수정하지 않습니다.
- 배포 주소와 API 주소를 코드에 직접 반복해서 작성하지 않습니다.
- 최종 미션 요구사항과 Vercel 배포 방법은 API 배포 검증 후 추가됩니다.
