const text = document.querySelector(".user-name-text");
const input = document.querySelector(".user-name-input");
const button = document.querySelector(".user-name-button");


function clickUserName() {
    text.classList.add("disable");
    input.classList.remove("disable");
    button.classList.remove("disable");
}

function addStyle() {
    text.classList.remove("disable");
    input.classList.add("disable");
    button.classList.add("disable");
}

text.addEventListener("click", clickUserName);


function clickButton() {
    const pastname = text.textContent;
    const nickname = input.value.trim();

    if (nickname === null || nickname === "") {
        alert("닉네임은 빈 칸일 수 없습니다!");
        input.value = pastname;
        addStyle();
        return;
    }

    text.textContent = nickname;
    addStyle();
}

button.addEventListener("click", clickButton);