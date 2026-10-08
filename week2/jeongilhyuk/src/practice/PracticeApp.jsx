import Greeting from './components/Greeting.jsx'
import JsxRules from './components/JsxRules.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import StudyInfo from './components/StudyInfo.jsx'
import AttendancePanel from './components/AttendancePanel.jsx'

const studentName = '정일혁'

// 만든 컴포넌트들을 PracticeApp 안에 중첩해서 한 페이지로 모은다.
function PracticeApp() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>리액트 빠른 시작 실습</h1>
        <p className="page-desc">KUIT 8기 웹 2주차 / {studentName}</p>
      </header>

      <section className="section">
        <h2>1. 컴포넌트 만들고 중첩하기</h2>
        <p className="section-desc">
          Greeting 컴포넌트를 따로 만들고 App 안에서 태그처럼 불러 썼습니다.
        </p>
        <Greeting name={studentName} />
      </section>

      <section className="section">
        <h2>2. JSX 로 마크업 작성하기</h2>
        <p className="section-desc">
          return 하는 태그는 하나로 감싸야 하고, 빈 태그도 닫아야 합니다.
        </p>
        <JsxRules />
      </section>

      <section className="section">
        <h2>3. className 으로 스타일 추가하기</h2>
        <p className="section-desc">
          CSS 파일에 규칙을 쓰고 className 으로 연결했습니다.
        </p>
        <ProfileCard name={studentName} part="웹 프론트엔드" />
      </section>

      <section className="section">
        <h2>4. 데이터 표시하기</h2>
        <p className="section-desc">
          중괄호 안에 변수, 계산식, 스타일 객체를 넣어 값을 그대로 보여 줍니다.
        </p>
        <StudyInfo />
      </section>

      <section className="section">
        <h2>5. 조건부 렌더링</h2>
        <p className="section-desc">
          아래 체크박스와 버튼을 눌러 보면 if 문, 삼항 연산자, &amp;&amp; 연산자가 각각
          어떻게 달라지는지 비교할 수 있습니다. &amp;&amp; 는 조건이 거짓이면 그 자리에
          아무것도 남지 않습니다.
        </p>
        <AttendancePanel />
      </section>
    </main>
  )
}

export default PracticeApp
