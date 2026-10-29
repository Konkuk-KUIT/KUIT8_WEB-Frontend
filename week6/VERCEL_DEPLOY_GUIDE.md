# 6주차 Vercel 배포 실습 가이드

이 문서는 회원가입을 마치고 Vercel에 로그인할 수 있는 상태부터 진행합니다. 강의에서는 조직 Git 저장소를 Vercel에 연결하지 않고, 각자 로컬의 `week6/본인이름` 폴더를 Vercel CLI로 배포합니다.

이 방식을 사용하면 같은 조직 저장소에서 작업하더라도 각자 별도의 Vercel 프로젝트와 배포 주소를 가질 수 있습니다. Git 저장소 전체나 다른 부원의 폴더는 배포되지 않습니다.

## 강의 전에 안내할 내용

- Vercel 회원가입과 GitHub 로그인은 각자 미리 완료합니다.
- 개인 학습 프로젝트이므로 Personal Account의 Hobby 플랜을 사용합니다.
- 유료 Team을 만들거나 Pro 플랜을 선택하지 않습니다.
- 자신의 6주차 구현과 `npm run build`가 완료된 상태에서 실습합니다.

## 1. 배포 파일 확인

터미널 위치를 자신의 프로젝트 폴더로 이동합니다.

```bash
cd week6/본인이름
npm run build
```

> 설명: 저장소 최상위가 아니라 `package.json`이 있는 자신의 폴더에서 실행해야 자신의 과제만 별도 프로젝트로 배포됩니다.

프로젝트 루트의 `vercel.json`을 확인합니다.

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

> 설명: React Router의 `/store`, `/store/1`, `/cart` 주소로 직접 접속하거나 새로고침해도 Vercel 404가 발생하지 않도록 모든 경로를 `index.html`로 연결합니다.

`.gitignore`에는 다음 항목이 있어야 합니다.

```gitignore
.vercel
```

> 설명: Vercel 연결 정보가 저장되는 로컬 폴더이므로 Git에는 올리지 않습니다. `vercel.json`은 배포 설정이므로 반대로 커밋합니다.

## 2. Vercel 로그인

```bash
npx vercel login
```

브라우저가 열리면 자신의 Vercel 계정으로 로그인을 완료합니다. 이미 CLI 로그인이 유지되어 있다면 이 단계는 바로 완료될 수 있습니다.

## 3. 개인 Vercel 프로젝트 만들기

```bash
npx vercel link
```

질문이 나오면 다음 기준으로 선택합니다.

1. Scope는 자신의 Personal Account를 선택합니다.
2. 기존 프로젝트 연결 여부는 `No`를 선택합니다.
3. 프로젝트 이름은 다른 사람과 겹치지 않게 작성합니다. 예: `kuit8-week6-sanghyun`
4. 현재 폴더를 프로젝트로 연결합니다.
5. 프레임워크는 자동 감지된 Vite를 사용하고 별도 설정은 변경하지 않습니다.

> 설명: GitHub 조직 저장소를 Import하지 않습니다. Vercel CLI가 현재 로컬 폴더를 개인 Vercel 프로젝트에 연결하므로, 조직 저장소의 각자 브랜치를 별도로 연결하거나 복제할 필요가 없습니다.

연결 후 `.vercel` 폴더가 생기는 것은 정상입니다.

## 4. 배포 환경변수 등록

Preview와 Production 환경에 API 주소를 각각 등록합니다.

```bash
npx vercel env add VITE_API_BASE_URL preview
npx vercel env add VITE_API_BASE_URL production
```

두 명령 모두 값으로 다음 주소를 입력합니다.

```text
https://kuit-8th-mission-server.vercel.app
```

> 설명: 로컬의 `.env.local`은 Vercel 배포 환경을 자동으로 대신하지 않습니다. Vite 환경변수는 빌드할 때 사용되므로 값을 추가하거나 수정했다면 반드시 다시 배포해야 합니다.

## 5. Preview 배포와 확인

```bash
npx vercel
```

출력된 Preview URL을 브라우저에서 엽니다. 다음 항목을 확인합니다.

- `/store`에서 가게 목록이 표시되는가?
- 개발자 도구 Network에서 `GET /api/stores`가 배포된 백엔드 주소로 요청되는가?
- 검색과 좋아요 기능이 그대로 동작하는가?
- `/store`, `/store/1`, `/cart`에서 새로고침해도 Vercel 404가 발생하지 않는가?

문제가 있으면 Production 배포 전에 수정한 뒤 `npx vercel`로 Preview를 다시 배포합니다.

## 6. Production 배포

Preview 확인이 끝나면 Production으로 배포합니다.

```bash
npx vercel --prod
```

출력된 Production URL에서 Preview와 같은 항목을 다시 확인합니다. 이 주소가 최종 제출할 프론트엔드 배포 주소입니다.

## 7. 배포 후 Git 확인

```bash
git status
```

다음을 확인합니다.

- `.vercel`은 커밋 대상에 나타나지 않는다.
- `.env.local`은 커밋하지 않는다.
- `.env.example`과 `vercel.json`은 커밋한다.
- 구현이 끝난 소스 코드는 강의 종료 후 최종 커밋하여 자신의 브랜치에 push한다.

## 자주 생기는 문제

### 배포 화면에서 API 데이터가 보이지 않는 경우

Vercel 프로젝트의 환경변수 이름이 `VITE_API_BASE_URL`인지 확인하고 다시 `npx vercel --prod`를 실행합니다. 기존 배포에는 나중에 추가한 환경변수가 자동 반영되지 않습니다.

### 하위 주소를 새로고침했을 때 404가 뜨는 경우

`vercel.json`이 `week6/본인이름` 바로 아래에 있는지 확인하고 다시 배포합니다.

### 다른 부원의 폴더까지 배포되는 경우

터미널이 저장소 최상위에 있는지 확인합니다. `package.json`이 있는 `week6/본인이름` 폴더로 이동한 뒤 새로운 개인 프로젝트에 다시 연결합니다.

### 잘못된 Vercel 프로젝트에 연결한 경우

현재 폴더의 `.vercel` 연결만 해제한 뒤 `npx vercel link`로 올바른 개인 프로젝트를 다시 선택합니다. Git에 올라간 소스 코드는 영향을 받지 않습니다.

## 공식 문서

- [Vercel CLI 배포](https://vercel.com/docs/projects/deploy-from-cli)
- [Vercel 환경변수](https://vercel.com/docs/environment-variables)
- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
