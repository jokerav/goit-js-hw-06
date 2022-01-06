// выбираем все елементы с тегом .item
const listCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${listCategories.length}`);

// выбираем заголовки списков и помещаем их в массив
const listHeaders = document.querySelectorAll(".item h2");
listHeaders.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
  // для каждого заголовка ищем соседа (список) и выводим количество его елемеентов
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
