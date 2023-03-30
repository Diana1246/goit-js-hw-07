const counterValue = document.querySelector("#value");

function increment() {
  counterValue.textContent++;
}

function decrement() {
  counterValue.textContent--;
}

document.querySelector("[data-action=increment]").addEventListener("click", increment);
document.querySelector("[data-action=decrement]").addEventListener("click", decrement);
