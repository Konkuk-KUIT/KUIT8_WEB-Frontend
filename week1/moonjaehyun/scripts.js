const alarmButton = document.querySelector(".alarm-button");

function changeAlarmState() {
    const input = prompt("enabled 또는 disabled를 입력하세요,");

    if (input === null) {
        return;
    }

    const state = input.trim().toLowerCase();

    if (state === "disabled") {
        alarmButton.classList.add("alarm-button--disabled");
    } else if (state === "enabled") {
        alarmButton.classList.remove("alarm-button--disabled");
    } else {
        alert("enabled 또는 disabled를 입력해 주세요.");
    }
}

alarmButton.addEventListener("click", changeAlarmState);