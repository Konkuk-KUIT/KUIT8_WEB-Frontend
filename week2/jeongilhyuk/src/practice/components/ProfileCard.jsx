// className 으로 CSS 파일의 스타일을 붙이는 예제다.
// 스타일 규칙은 src/styles/practice.css 에 있다.
function ProfileCard({ name, part }) {
  return (
    <section className="card">
      <div className="card-avatar">{name[0]}</div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{part} 파트</p>
      </div>
    </section>
  )
}

export default ProfileCard
