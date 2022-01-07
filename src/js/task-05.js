const inputEl = document.querySelector("#name-input");
const nameEl = document.querySelector("#name-output");
inputEl.addEventListener("input", makeHello);

let nickName = "";
function makeHello() {
  if (inputEl.value !== "") nickName = inputEl.value;
  else nickName = "Anonymous";
  nameEl.textContent = nickName;
}

// вариант без промежуточной переменной nickName
// function makeHello() {
//   if (inputEl.value !== "") nameEl.textContent = inputEl.value;
//   else nameEl.textContent = "Anonymous";
// }
