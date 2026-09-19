const userName = document.querySelector(".user-name");

/* 추가 구현 사항 - 로컬 스토리지 */
/* 페이지가 열릴 때 저장된 닉네임 불러오기 */
const savedName = localStorage.getItem("nickname");

if (savedName !== null) {
  userName.textContent = savedName;
}

userName.addEventListener("click", () => {
  // 편집 영역 생성
  const editBox = document.createElement("div");
  editBox.className = "profile-info__edit";

  // input 생성
  const input = document.createElement("input");
  input.className = "profile-info__input";
  input.type = "text";
  input.value = userName.textContent;
  input.placeholder = "닉네임을 입력하세요";

  // 수정 버튼 생성
  const button = document.createElement("button");
  button.className = "profile-info__button";
  button.type = "button";
  button.textContent = "수정";

  // 편집 영역에 input과 button 넣기
  editBox.append(input, button);

  // 기존 닉네임을 편집 영역으로 교체
  userName.replaceWith(editBox);

  // 바로 입력할 수 있도록 포커스
  input.focus();

  // 수정 버튼 클릭
  button.addEventListener("click", () => {
    const newName = input.value.trim();

    if (newName !== "") {
      userName.textContent = newName;

      // localStorage에 저장 (key-value 형태)
      localStorage.setItem("nickname", newName);
    }

    // 다시 원래 span으로 복귀
    editBox.replaceWith(userName);
  });
});
