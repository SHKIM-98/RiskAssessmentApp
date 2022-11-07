const loginForm = document.querySelector("#login_form");
const userInput = document.querySelector("#login_form input");
const userName = document.querySelector("#user_name");
const USER_KEY = "user";
const CLASS_HIDDEN = "hidden";

function handleUserSubmit(event) {
    event.preventDefault();

    const user = userInput.value;
    localStorage.setItem(USER_KEY,user);
    userName.innerText = `User : ${user}`;
    loginForm.classList.add(CLASS_HIDDEN);
    userName.classList.remove(CLASS_HIDDEN);
    
    console.log(`statement : Login by ${user}`);
}

loginForm.addEventListener("submit",handleUserSubmit);
