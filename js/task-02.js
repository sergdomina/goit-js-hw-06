const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulRef = document.querySelector('#ingredients')
const createItem = el=>{
  const itemRef=document.createElement('li')
  itemRef.textContent=el;
  return itemRef
}
const elementsListRef= ingredients.map(createItem)

ulRef.append(...elementsListRef)