# KUIT 8기 Web 4주차

4주차에는 3주차에 각자 구현한 Store와 Cart UI를 유지하면서 프로젝트를 TypeScript로 전환합니다. 그 위에 Event, `useState`, `useEffect`, `useRef`, State Lifting을 적용해 화면 내부의 동작을 구현합니다.

## 이번 주차 학습 내용

- JavaScript React 프로젝트를 TypeScript로 전환하기
- 기본 타입, 객체 타입, 함수 타입 작성하기
- React 컴포넌트의 Props 타입 지정하기
- Event handler 작성하기
- `useState`로 화면 상태 관리하기
- `useEffect`로 브라우저 기능과 상태 동기화하기
- `useRef`로 DOM 요소 참조하기
- 공통 부모로 State Lifting하기

## 이번 주차에서 하지 않는 것

- 3주차에 제공된 라우팅 구조 변경
- 라우팅 기능과 관련 Hook 학습
- Store와 Cart 사이의 전역 상태 연결
- 외부 상태 관리 라이브러리 사용
- API 요청 또는 서버 데이터 연동

3주차의 `/store`, `/store/:storeId`, `/cart` 경로는 그대로 유지합니다. 4주차에는 주소별 화면이 이미 표시된다는 전제에서 각 페이지 내부의 상태와 이벤트에 집중합니다.

## 1. 시작 원칙

4주차에는 새로운 React 프로젝트를 만들지 않습니다. 반드시 자신이 3주차에 구현한 폴더를 복사하여 이어서 작업합니다.

```text
week3/자기이름
        │
        └── week4/자기이름으로 복사
                  │
                  ├── 기존 Store/Cart UI 유지
                  ├── JavaScript를 TypeScript로 전환
                  └── Event와 React Hook 적용
```

`week4/sanghyun`은 파트장의 TypeScript 설정과 Tailwind 가게 리스트 구현 예시입니다. 이 폴더 전체를 자신의 폴더로 복사하거나 자신의 Store/Cart 코드를 파트장 코드로 덮어쓰지 않습니다.

## 2. 자신의 week3 프로젝트 복사

파일 탐색기 또는 Finder에서 자신의 `week3/자기이름` 폴더를 복사한 뒤 `week4` 폴더에 붙여 넣습니다.

```text
week3/A를 복사 → week4에 붙여 넣기 → week4/A
```

이제 `week4/A`에서 자신이 3주차에 구현한 가게 메뉴 리스트와 주문서 화면을 그대로 이어서 작업합니다.

수업에서 함께 구현한 가게 리스트 코드는 `week4/sanghyun/src`에서 **가게 리스트와 관련된 파일만** 자신의 `week4/A/src` 안의 같은 위치에 복사합니다. `src` 전체를 복사하거나 자신이 구현한 가게 메뉴 리스트와 주문서 파일을 덮어쓰지 않습니다.

복사할 파일은 다음과 같습니다. 아래 경로는 `week4/sanghyun/src`를 기준으로 합니다.

```text
components/BackBar.tsx
components/Button.tsx
components/OrderBar/OrderBar.tsx
components/StoreItem.tsx
components/StoreSearchBar.tsx
models/stores.ts
pages/Stores/Stores.tsx
types/stores.ts
```

`node_modules`와 `dist`는 제출 대상이 아닙니다. 이후 설치와 실행 명령은 반드시 `week4/자기이름` 폴더 안에서 실행합니다.

## 3. TypeScript 도입을 위해 패키지 수정

자신의 기존 `package.json`은 유지하고 TypeScript 관련 개발 의존성만 추가합니다.

```bash
npm install -D typescript@~6.0.2 typescript-eslint@^8.69.0 @types/node@^24.13.3 @types/react@^19.2.18 @types/react-dom@^19.2.7
```

파트장의 `package.json`이나 `package-lock.json`을 복사하지 않습니다. 이를 덮어쓰면 본인이 사용한 styled-components 등의 의존성이 사라질 수 있습니다.

## 4. TypeScript 설정 파일 추가

`npm install`은 TypeScript 패키지를 설치하고 `package.json`을 수정할 뿐, 프로젝트에 맞는 `tsconfig`와 ESLint 설정까지 자동으로 만들어 주지는 않습니다. 따라서 아래 설정 파일만 파트장 폴더에서 복사합니다.

현재 위치가 `week4/본인이름`인 상태에서 파트장의 TypeScript 설정 파일을 복사합니다.

```bash
cp ../sanghyun/tsconfig.json .
cp ../sanghyun/tsconfig.app.json .
cp ../sanghyun/tsconfig.node.json .
cp ../sanghyun/eslint.config.js .
```

`package.json`의 `build` 명령에는 TypeScript 검사를 추가합니다.

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

터미널에서 다음 명령으로 변경할 수도 있습니다.

```bash
npm pkg set 'scripts.build=tsc -b && vite build'
```

## 5. Vite 설정을 TypeScript로 변경

기존 파일명을 변경합니다.

```text
vite.config.js -> vite.config.ts
```

터미널에서는 다음과 같이 실행할 수 있습니다.

```bash
mv vite.config.js vite.config.ts
```

파일 내부 설정은 week3에서 사용하던 내용을 그대로 유지합니다. CSS Module, 일반 CSS, styled-components, Tailwind 등 기존 스타일링 방식을 변경할 필요가 없습니다.

## 6. JavaScript 파일을 TypeScript로 변경

이 단계는 각자의 week3 파일 구조가 다르기 때문에 본인 폴더에서 직접 진행해야 합니다. 파트장 폴더를 복사해서 덮어쓰지 않습니다.

파트장 예시는 확장자와 import 정리가 이미 완료되어 있으므로 강의 본편에서는 이 기계적인 작업을 반복하지 않고 타입 작성부터 시작합니다.

JSX가 들어 있는 React 파일은 `.tsx`, JSX가 없는 데이터·유틸리티 파일은 `.ts`를 사용합니다.

| 기존 파일              | 변경 파일    |
| ---------------------- | ------------ |
| `main.jsx`             | `main.tsx`   |
| `App.jsx`              | `App.tsx`    |
| `Router.jsx`           | `Router.tsx` |
| React 컴포넌트 `.jsx`  | `.tsx`       |
| 페이지 컴포넌트 `.jsx` | `.tsx`       |
| `stores.js`            | `stores.ts`  |
| 일반 유틸 함수 `.js`   | `.ts`        |

`eslint.config.js`와 `package.json`은 애플리케이션 소스가 아닌 설정 파일이므로 확장자를 변경하지 않아도 됩니다.

`index.html`의 진입점도 변경합니다.

```html
<script type="module" src="/src/main.tsx"></script>
```

기존 import에 `.js` 또는 `.jsx`가 남아 있다면 확장자를 제거하는 방식을 권장합니다.

```ts
// 변경 전
import App from "./App.jsx";

// 변경 후
import App from "./App";
```

모든 파일의 확장자를 먼저 변경한 후 다음 순서로 타입 오류를 해결합니다.

```text
타입 정의
-> stores 데이터
-> Button, BackBar 같은 작은 컴포넌트
-> StoreItem, MenuItem, CartItem
-> Stores, Store, Cart 페이지
-> 기존 Router
-> App
-> main
```

기존 Router는 새로운 기능을 추가하지 않고 TypeScript 오류만 해결합니다.

확장자 정리가 끝난 뒤 다음 두 가지를 직접 확인합니다.

```text
1. src 안에 .js 또는 .jsx 파일이 남아 있지 않은가?
2. import 경로에 .js 또는 .jsx가 남아 있지 않은가?
```

## 7. 미션 안내

파트장 예시는 `/store` 가게 리스트에 검색과 찜 기능을 구현합니다. 부원들은 자신의 3주차 UI를 유지하면서 다음 두 미션을 구현합니다.

| 경로       | 미션             |
| ---------- | ---------------- |
| `/store/2` | 가게 메뉴 리스트 |
| `/cart`    | 주문서           |

두 화면의 state를 서로 연결할 필요는 없습니다. 각 화면 내부의 state와 데이터 흐름만 구현합니다.

### 공통 범위

- Mock Data만 사용합니다.
- 기존 라우팅 구조는 변경하지 않습니다.
- 전역 상태 관리 라이브러리를 사용하지 않습니다.
- API 요청이나 서버 연동을 하지 않습니다.
- 최소한의 state를 사용합니다.
- state 끌어올리기를 적절히 사용합니다.
- TypeScript를 활용하여 미션을 구현합니다.

## 8. 가게 메뉴 리스트 미션 구현

확인 경로: `http://localhost:5173/store/2`

### 필수 미션

- [ ] 메뉴의 `담기` 버튼에 클릭 Event를 연결합니다.
- [ ] 같은 메뉴를 다시 담으면 새 항목을 추가하지 않고 수량을 증가시킵니다.
- [ ] 현재 장바구니를 기준으로 총 주문금액을 계산합니다.

### 선택 미션

- [ ] Browser Storage를 사용해 새로고침 후에도 담은 메뉴를 유지합니다.

### 완료 확인

- [ ] 같은 메뉴를 여러 번 담으면 수량만 증가하는가?
- [ ] 장바구니가 변경될 때 총 주문금액도 바로 변경되는가?

## 9. 주문서 미션 구현

확인 경로: `http://localhost:5173/cart`

### 필수 미션

- [ ] 메뉴별 수량 증가와 감소 Event를 구현합니다.
- [ ] 최소 주문 금액 충족 여부로 버튼 상태를 결정합니다.
- [ ] 최소 주문금액 비교에는 배달요금을 포함하지 않습니다.
- [ ] 페이지 진입 시 1분 주문 제한 타이머를 시작합니다.
- [ ] 시간이 만료되면 만료 안내를 표시하고 결제 버튼을 비활성화합니다.

### 선택 미션

- [ ] Browser Storage를 사용해 새로고침 후에도 주문 제한 시간이 이어지도록 구현합니다.

### 완료 확인

- [ ] 수량 변경에 따라 주문금액과 총 결제금액이 다시 계산되는가?
- [ ] 최소 주문금액 미달 시 결제 버튼이 비활성화되는가?
- [ ] 타이머가 매초 감소하고 `00:00`에서 멈추는가?
- [ ] 화면을 벗어날 때 Timer가 정리되는가?
- [ ] 시간이 만료되면 결제 버튼이 비활성화되는가?

### 전체 검사

모든 명령은 `week4/본인이름` 안에서 실행합니다.

```bash
npm run lint
npm run build
npm run dev
```

- [ ] 모든 React 컴포넌트가 `.tsx`인가?
- [ ] 일반 데이터와 유틸리티 파일이 `.ts`인가?
- [ ] `.js`, `.jsx` import가 남아 있지 않은가?
- [ ] 모든 Props에 타입이 있는가?
- [ ] 불필요한 `any`를 사용하지 않았는가?
- [ ] `npm run lint`와 `npm run build`가 성공하는가?

## 10. 제출

`week4/sanghyun`은 수정하지 않고 자신의 폴더만 커밋합니다.

```bash
git add week4/본인이름
git status
git commit -m "feat: complete week4 mission"
git push origin 본인브랜치이름
```

다른 사람의 폴더나 저장소 루트의 파일이 포함되지 않았는지 `git status`로 확인한 후 제출합니다.
