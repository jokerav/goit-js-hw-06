const btnEl = document.querySelector(".change-color");
const textColor = document.querySelector(".widget span");
btnEl.addEventListener("click", changeBackgroundColor);
console.log(btnEl);

function changeBackgroundColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textColor.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
