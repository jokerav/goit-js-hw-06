function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputCountBoxesEl = document.querySelector("input");
const creatBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

creatBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = inputCountBoxesEl.valueAsNumber;
  let boxesArr = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
    size += 10;
  }
  console.log(amount);
  console.log(boxesArr);
  boxes.append(...boxesArr);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
