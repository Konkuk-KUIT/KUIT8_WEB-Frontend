// 중괄호 { } 안에서는 자바스크립트 값을 그대로 쓸 수 있다.
const study = {
  week: 2,
  topic: '리액트 빠른 시작',
  sessions: 3,
  accentColor: '#3f6fe0',
}

function StudyInfo() {
  return (
    <div className="info">
      {/* 변수와 객체의 속성을 그대로 보여 준다. */}
      <p className="info-row">
        <span className="info-label">주차</span>
        {study.week}주차
      </p>
      {/* 계산식도 쓸 수 있다. */}
      <p className="info-row">
        <span className="info-label">남은 회차</span>
        {study.sessions - 1}회
      </p>
      {/* style 의 바깥 중괄호는 JSX, 안쪽 중괄호는 자바스크립트 객체다. */}
      <p className="info-row" style={{ color: study.accentColor }}>
        <span className="info-label">주제</span>
        {study.topic}
      </p>
    </div>
  )
}

export default StudyInfo
