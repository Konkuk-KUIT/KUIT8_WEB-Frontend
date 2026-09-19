// const alarmButton = document.querySelector(".alarm-button");

// function changeAlarmState() {
//     const input = prompt("enabled 또는 disabled를 입력하세요,");

//     if (input === null) {
//         return;
//     }

//     const state = input.trim().toLowerCase();

//     if (state === "disabled") {
//         alarmButton.classList.add("alarm-button--disabled");
//     } else if (state === "enabled") {
//         alarmButton.classList.remove("alarm-button--disabled");
//     } else {
//         alert("enabled 또는 disabled를 입력해 주세요.");
//     }
// }

const alarm_button = document.querySelector(".alarm-btn");


const changeAlarmState = ()=>{
    const input = prompt("enabled 또는 disabled를 입력해주세요");

    if(input == null){
        return;
    }

    state = input.trim().toLocaleLowerCase();

    if(state == "enabled"){
        alarm_button.classList.remove("alarm-opacity");
    }
    else if(state == "disabled"){
        alarm_button.classList.add("alarm-opacity");
    }
    else{
        alert("enabled 또는 disabled를 입력해주세요");
    }
}

alarm_button.addEventListener("click", changeAlarmState);
