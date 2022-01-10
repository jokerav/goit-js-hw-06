const text = document.querySelector("span");
const inputRangeEl = document.querySelector("#font-size-control");
inputRangeEl.addEventListener("input", changeTextFontSize);
function changeTextFontSize() {
  const fontSize = inputRangeEl.value;
  text.style.fontSize = `${fontSize}px`;
}
