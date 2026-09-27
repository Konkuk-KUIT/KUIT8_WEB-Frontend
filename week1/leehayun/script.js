const nicknameButton = document.querySelector(".profile__nickname");
const nicknameEditor = document.querySelector(".nickname-editor");
const nicknameInput = document.querySelector(".nickname-editor__input");
const saveButton = document.querySelector(".nickname-editor__save");

function openNicknameEditor() {
  nicknameInput.value = nicknameButton.textContent;
  nicknameButton.hidden = true;
  nicknameEditor.hidden = false;
  nicknameInput.focus();
}

function saveNickname() {
  const newNickname = nicknameInput.value.trim();

  if (newNickname === "") {
    nicknameInput.focus();
    return;
  }

  nicknameButton.textContent = newNickname;
  nicknameEditor.hidden = true;
  nicknameButton.hidden = false;
  nicknameButton.focus();
}

nicknameButton.addEventListener("click", openNicknameEditor);
saveButton.addEventListener("click", saveNickname);
nicknameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") saveNickname();
  if (event.key === "Escape") {
    nicknameEditor.hidden = true;
    nicknameButton.hidden = false;
    nicknameButton.focus();
  }
});
