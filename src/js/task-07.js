const text = document.querySelector("span");
const inputRangeEl = document.querySelector("#font-size-control");
inputRangeEl.addEventListener("input", changeTextFontSize);
function changeTextFontSize() {
  const fontSize = inputRangeEl.value;
  console.log(fontSize);
  //text.insertAdjacentHTML("afterend", `font-size: '${inputRangeEl.value}px'`);

  text.style.fontSize = `${fontSize}px`;
}
console.log(text);
