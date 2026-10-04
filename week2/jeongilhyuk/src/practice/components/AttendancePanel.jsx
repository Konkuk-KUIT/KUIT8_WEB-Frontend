import { useState } from 'react'
import AttendanceBadge from './AttendanceBadge.jsx'

// 체크박스와 버튼으로 값을 바꿔 가며 조건부 렌더링 세 가지를 한 화면에서 비교한다.
// useState 는 빠른 시작의 다음 단계 내용인데, 두 갈래를 직접 눌러 보려고 여기서만 미리 쓴다.
function AttendancePanel() {
  const [isPresent, setIsPresent] = useState(true)
  const [hasNotice, setHasNotice] = useState(false)

  return (
    <div className="panel">
      <div className="panel-controls">
        <label className="toggle">
          <input
            type="checkbox"
            checked={isPresent}
            onChange={(event) => setIsPresent(event.target.checked)}
          />
          2주차 스터디에 출석했다
        </label>
        <button
          type="button"
          className="toggle-button"
          onClick={() => setHasNotice(!hasNotice)}
        >
          {hasNotice ? '새 공지 숨기기' : '새 공지 보이기'}
        </button>
      </div>

      <p className="panel-row">
        <span className="panel-label">if 문</span>
        <AttendanceBadge isPresent={isPresent} />
      </p>

      {/* 조건부 렌더링 2. 삼항 연산자는 한 줄 안에서 두 갈래를 고른다. */}
      <p className="panel-row">
        <span className="panel-label">삼항 연산자</span>
        {isPresent ? '미션을 바로 시작합니다.' : '녹화 강의를 먼저 봅니다.'}
      </p>

      {/* 조건부 렌더링 3. && 는 조건이 참일 때만 뒤쪽을 그리고, 거짓이면 아무것도 그리지 않는다. */}
      <p className="panel-row">
        <span className="panel-label">&amp;&amp; 연산자</span>
        {hasNotice && <span className="notice">읽지 않은 공지가 있습니다.</span>}
      </p>
    </div>
  )
}

export default AttendancePanel
