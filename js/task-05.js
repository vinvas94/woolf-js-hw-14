const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

// Варіант 1
function handlerInput(evt) {
  if (span.textContent === "Anonymous") {
    evt.currentTarget.value.trim() === "";
  }
  span.textContent = evt.currentTarget.value;
}

// Варіант 2
// function handlerInput(event) {
//   event.currentTarget.value.trim() === ""
//     ? (span.textContent = "Anonymous")
//     : (span.textContent = event.currentTarget.value);
// }
