const span = document.querySelector("#value");
const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');

buttonDec.addEventListener("click", handlerDecClick);
let counterValue = 0;
function handlerDecClick() {
  counterValue -= 1;
  span.textContent = `${counterValue}`;
}

buttonInc.addEventListener("click", handlerIncClick);
function handlerIncClick(event) {
  counterValue += 1;
  span.textContent = `${counterValue}`;
}
