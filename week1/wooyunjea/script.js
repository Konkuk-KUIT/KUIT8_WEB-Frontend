const nameEdit = document.querySelector(".nameedit");

function openNameInput() {
  const nameText = document.querySelector(".nametext");

  const input = document.createElement("input");
  input.className = "nameinput";
  input.value = nameText.textContent;

  const button = document.createElement("button");
  button.className = "namebutton";
  button.textContent = "수정";

  nameText.replaceWith(input);
  nameEdit.appendChild(button);
  input.focus();

  button.addEventListener("click", changeName);
}

function changeName() {
  const input = document.querySelector(".nameinput");
  const button = document.querySelector(".namebutton");

  const nameText = document.createElement("p");
  nameText.className = "nametext";
  nameText.textContent = input.value;

  input.replaceWith(nameText);
  button.remove();

  nameText.addEventListener("click", openNameInput);
}

document.querySelector(".nametext").addEventListener("click", openNameInput);
