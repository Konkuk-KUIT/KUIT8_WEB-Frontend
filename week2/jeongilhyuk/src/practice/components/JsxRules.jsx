// JSX 규칙 두 가지를 한 번에 보는 예제다.
// 1. return 하는 태그는 하나로 감싸야 한다. 감쌀 태그가 마땅치 않으면 <> </> 를 쓴다.
// 2. <br /> 처럼 내용이 없는 태그도 반드시 닫아 준다.
function JsxRules() {
  return (
    <>
      <p className="jsx-line">
        HTML 과 비슷해 보이지만 JSX 는 자바스크립트 안에서 쓰는 문법이다.
        <br />
        그래서 class 대신 className 을 쓴다.
      </p>
      <p className="jsx-line">태그 두 개를 빈 태그 &lt;&gt; 로 묶어서 함께 반환했다.</p>
    </>
  )
}

export default JsxRules
