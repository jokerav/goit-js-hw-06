const loginFormEl = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");
const inputEmail = inputs[0];
const inputPass = inputs[1];
loginFormEl.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  console.log(inputEmail.value, inputPass.value);
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
