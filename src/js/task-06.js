const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", chekInputLength);
function chekInputLength() {
  const inputText = inputEl.value;
  if (inputText.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else inputEl.classList.add("invalid");
}
