// 컴포넌트는 대문자로 시작하는 함수이고, 화면에 그릴 JSX 를 return 한다.
// 괄호 안의 name 은 부모 컴포넌트가 넘겨 준 값(props)이다.
function Greeting({ name }) {
  return <p className="greeting">안녕하세요, {name} 님.</p>
}

export default Greeting
