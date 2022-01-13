function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputCountBoxesEl = document.querySelector("input");
const creatBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

creatBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
let size = 30;

// В условии написано "Создай функцию createBoxes(amount), которая принимает один параметр - число."
// У меня получился вариант без параметра(строки 22 - 23).
// После долгих плясок с бубном получился таки вариант функции с параметром (строки 19-20), но непонятно как он работает.
// Если возможно, напишите, пожалуйта что происходит в закоментированых строках. Заранее благодарен

// function createBoxes(amount) {
//   amount = inputCountBoxesEl.valueAsNumber;

// function createBoxes() {
//   const amount = inputCountBoxesEl.valueAsNumber;
function createBoxes(amount) {
  amount = inputCountBoxesEl.valueAsNumber;
  let boxesArr = [];
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
    size += 10;
  }
  boxes.append(...boxesArr);
}

function destroyBoxes() {
  size = 30;
  boxes.innerHTML = "";
}
