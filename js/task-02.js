const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createList() {
  const listOfIngredientd = document.querySelector('ul#ingredients');
  const markup = ingredients.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    return item;
  })
  return listOfIngredientd.append(...markup);
}

createList();
