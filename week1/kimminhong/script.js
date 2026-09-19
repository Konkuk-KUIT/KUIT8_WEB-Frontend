const profileName = document.querySelector(".myPage-profile__name");
const nameDiv = document.querySelector(".myPage-profile__name-div");
const name = localStorage.getItem('name'); 

function changeNameState(){
    const input = document.createElement('input');
    const btn = document.createElement('button');
    input.value = profileName.textContent;
    input.id = "nameId";
    btn.textContent = "수정";
    btn.className = "modify-btn";
    btn.addEventListener("click", ()=>{
        profileName.textContent = input.value;
        localStorage.setItem('name', profileName.textContent);
        profileName.style.display = 'block';

        input.remove();
        btn.remove();

    })
    profileName.style.display = 'none';
    nameDiv.prepend(input);
    nameDiv.appendChild(btn);
}
profileName.addEventListener("click", changeNameState);
if(name){
    profileName.textContent = name;
}