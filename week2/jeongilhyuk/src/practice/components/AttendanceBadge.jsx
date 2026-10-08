// 조건부 렌더링 1. if 문으로 아예 다른 JSX 를 return 한다.
function AttendanceBadge({ isPresent }) {
  if (isPresent) {
    return <span className="badge badge-on">출석</span>
  }
  return <span className="badge badge-off">결석</span>
}

export default AttendanceBadge
