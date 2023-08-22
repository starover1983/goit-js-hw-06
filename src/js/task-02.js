const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients')
const list = ingredients.map((el) => {
  const item = document.createElement('li')
  item.textContent = el;
  item.classList.add("item")
  return item
})
listRef.append(...list);