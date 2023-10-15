// Варіант 1
const list = document.querySelector("#categories");
const allElements = list.children.length;
console.log(`"Number of categories:" ${allElements}`);

const item = document.querySelectorAll(".item");
item.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const elementsList = element.querySelectorAll("li").length;
  console.log(`Category:${categoryName}`);
  console.log(`Elements:${elementsList}`);
});

// Варіант 2
// const list = document.querySelector("#categories");
// const allElements = list.children.length;
// console.log("Number of categories:", allElements);

// const item = document.querySelectorAll(".item");
// const newItem = [...item];
// newItem.forEach((value) => {
//   console.log("Category:", value.firstElementChild.textContent);
//   console.log("Elements:", value.lastElementChild.childElementCount);
// });
