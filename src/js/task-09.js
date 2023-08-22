function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");
const bodyColor =document.querySelector('body')
buttonRef.addEventListener("click", onChangeColor);
function onChangeColor(e) {
  const colorValue=getRandomHexColor()
  bodyColor.style.background = colorValue;
  spanColorRef.textContent = colorValue;
}