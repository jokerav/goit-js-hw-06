let counterValue = 0;
// Ищем кнопки
const decrementBtn = document.querySelector("button[data-action = decrement]");
const incrementBtn = document.querySelector("button[data-action = increment]");
// Добавляем слушателей
decrementBtn.addEventListener("click", decrementCounterValue);
incrementBtn.addEventListener("click", incrementCounterValue);
// ищем елемент который нужно изменять
const counterEl = document.querySelector("#value");
// функции декремента и инкремента
function decrementCounterValue() {
  counterValue -= 1;
  counterEl.textContent = counterValue;
}
function incrementCounterValue() {
  counterValue += 1;
  counterEl.textContent = counterValue;
}
