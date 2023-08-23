let counterValue = 0;
const button = {
    down: document.querySelector("[data-action='decrement']"),
    up: document.querySelector("[data-action='increment']"),
    value : document.querySelector("#value"),
}
button.down.addEventListener('click', onDecrement);
button.up.addEventListener('click', onIncrement);
/**
 * уменьшение
 */
function onDecrement() {
    counterValue -= 1;
    value(counterValue)
}
/**
 * Увиличение 
 */
function onIncrement() {
    counterValue += 1;
    value(counterValue)
}
function value(value) {
      button.value.textContent = value; 
  
}