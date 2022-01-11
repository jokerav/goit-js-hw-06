const loginFormEl = document.querySelector(".login-form");
// const inputs = document.querySelectorAll("input");
const inputEmail = document.querySelector("input[type='email']");
const inputPass = document.querySelector("input[type='password']");
loginFormEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  if (inputEmail.value === "" || inputPass.value === "") {
    alert("Пожалуйста, заполните все поля формы.");
  } else {
    const user = {
      email: inputEmail.value,
      password: inputPass.value,
    };
    return user;
  }
}

// const inputEmail = document.querySelector("input[type='email']");
// console.log(inputEmail);
