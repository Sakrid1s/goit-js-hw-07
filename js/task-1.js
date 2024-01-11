const allCategories = document.querySelector('ul#categories');

console.log('Кількість li елементів: ', allCategories.children.length);

const categories = document.querySelectorAll('.item');

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;
  console.log(`Текст заголовка h2: ${categoryTitle}`);
  const categoryLists = category.querySelectorAll('li');
  console.log('Кількість li у категорії: ', categoryLists.length);
});
