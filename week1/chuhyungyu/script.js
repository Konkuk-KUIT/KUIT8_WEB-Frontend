const nameButton = document.querySelector(".name-button");

function changeName() {
    const input = document.createElement("input");
    const button = document.createElement("button");

    input.value = nameButton.textContent;
    button.textContent = "수정";

    nameButton.textContent = "";

    nameButton.appendChild(input);
    nameButton.appendChild(button);

    input.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    button.addEventListener("click", function(event) {
        event.stopPropagation();

        nameButton.textContent = input.value;
    });
}

nameButton.addEventListener("click", changeName);