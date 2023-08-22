const inputRef = document.querySelector("#font-size-control");
const TextRef = document.querySelector("#text")
inputRef.addEventListener("input", onSizeText);
function onSizeText(e) {
    TextRef.style.fontSize=`${e.currentTarget.valueAsNumber}px`
}
