const nickName=document.querySelector(".user-name");
const nameArea=document.querySelector(".changeName");
const nameTextArea=document.querySelector("#nameTextArea");
const modifyButton=document.querySelector("#nameButton");

nickName.addEventListener("click",()=>{
    if(!nickName.classList.contains("clicked")){
        nameArea.classList.add("clicked");
        nickName.style.display="none";
    }
});

modifyButton.addEventListener("click",()=>{
    nickName.textContent=nameTextArea.value;
    nameArea.classList.remove("clicked");
    nickName.style.display="flex";
});