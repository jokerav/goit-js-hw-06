const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Ссылка на список ингредиентов
const ingredientsList = document.querySelector("#ingredients");
// элементы списка ложим в пустой масив
let list = [];
ingredients.forEach((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  list.push(item);
});
// и добавляем в документ
ingredientsList.append(...list);
