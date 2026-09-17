const userName = document.querySelector(".user-name");
userName.textContent = localStorage.getItem("nickname") || userName.textContent;

function editName() {
  const form = document.createElement("form");
  form.className = "name-edit";
  form.innerHTML = '<input aria-label="새 닉네임" required /><button type="submit">수정</button>';

  const input = form.querySelector("input");
  input.value = userName.textContent;
  userName.hidden = true;
  userName.after(form);
  input.focus();
  input.select();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newName = input.value.trim();
    if (!newName) return;

    userName.textContent = newName;
    localStorage.setItem("nickname", newName);
    userName.hidden = false;
    form.remove();
    userName.focus();
  });
}

userName.addEventListener("click", editName);
userName.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    editName();
  }
});
