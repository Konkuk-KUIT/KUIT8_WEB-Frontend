const nameElement = document.querySelector(".name");
const nameModify = document.querySelector(".name-input");
const modifyButton = document.querySelector(".name-modify");

nameElement.addEventListener("click",()=>{
    nameElement.style.display = "none";
    nameModify.style.display = "inline-block";
    modifyButton.style.display = "inline-block";
});


modifyButton.addEventListener("click", () => {
  nameElement.textContent = nameModify.value;
  nameElement.style.display = "block";
  nameModify.style.display = "none";
  modifyButton.style.display = "none";
});