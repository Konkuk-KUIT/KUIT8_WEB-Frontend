// 닉네임 변경
// 흐름: 닉네임 클릭 → input과 수정 버튼이 나타남 → 수정(또는 Enter) → 닉네임 텍스트가 바뀜
// 저장: localStorage 에 넣어 두고 페이지를 열 때 다시 읽는다 (선택 도전)

const STORAGE_KEY = "nickname";

const nickname = document.getElementById("nickname");
const form = document.getElementById("nickname-form");
const input = document.getElementById("nickname-input");

// 새로고침 후에도 유지: 저장된 값이 있으면 그걸로 시작
const saved = localStorage.getItem(STORAGE_KEY);
if (saved) {
  nickname.textContent = saved;
}

function openEditor() {
  input.value = nickname.textContent;
  nickname.hidden = true;
  form.hidden = false;
  input.focus();
  input.select();
}

function closeEditor() {
  form.hidden = true;
  nickname.hidden = false;
}

function submitNickname(event) {
  event.preventDefault(); // form 기본 동작(페이지 새로고침) 막기

  const next = input.value.trim();
  if (next === "") {
    alert("닉네임을 입력해 주세요.");
    input.focus();
    return;
  }

  nickname.textContent = next;
  localStorage.setItem(STORAGE_KEY, next);
  closeEditor();
}

nickname.addEventListener("click", openEditor);
form.addEventListener("submit", submitNickname);

// Esc 로 취소
input.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEditor();
  }
});
