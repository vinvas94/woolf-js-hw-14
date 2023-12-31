const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Варіант 1
const list = document.querySelector("ul#ingredients");

const listIngredients = ingredients.map((ingredient) => {
  const listIngredient = document.createElement("li");
  listIngredient.classList.add("item");
  listIngredient.textContent = ingredient;
  return listIngredient;
});

list.append(...listIngredients);

// Варіант 2
// const list = document.querySelector("#ingredients");
// function listIngredients(ingredients) {
//   const markup = ingredients.map((value) => {
//     const liEl = document.createElement("li");
//     liEl.classList.add("item");
//     liEl.textContent = value;
//     list.append(liEl);
//     return liEl;
//   });
// }
// listIngredients(ingredients);

// Варіант 3
// const list = document.querySelector("#ingredients");
// const markup = ingredients
//   .map((text) => `<li class="item">${text}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
