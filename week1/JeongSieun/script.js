const userNameElement = document.getElementById("user-name");

function changeProfileName(event) {
    if (userNameElement.querySelector("input")) return;

    const currentName = userNameElement.textContent;

    userNameElement.innerHTML = `
        <input type="text" id="name-input" value="${currentName}" />
        <button id="edit-btn">수정</button>
    `;

    const nameInput = document.getElementById("name-input");
    const editBtn = document.getElementById("edit-btn");

    nameInput.addEventListener("click", function(e) {
        e.stopPropagation(); 
    });

    editBtn.addEventListener("click", function(e) {
        e.stopPropagation(); 
        
        const newName = nameInput.value.trim();
        
        if (newName !== "") {
            userNameElement.textContent = newName;
        } else {
            userNameElement.textContent = currentName;
        }
    });
}

userNameElement.addEventListener("click", changeProfileName);