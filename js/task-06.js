const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onfocus);
function onfocus(e) {
    console.dir(e.currentTarget);
    if (e.currentTarget.value.length === +e.currentTarget.dataset.length ) {
        // inputRef.style.borderColor = "#4caf50";
             inputRef.classList.remove("invalid")
        inputRef.classList.add("valid")
        // inputRef.classList.toggle("valid")

    } else {
        // inputRef.style.borderColor = "#f44336"
             inputRef.classList.remove("valid")
        inputRef.classList.add("invalid")
        // inputRef.classList.toggle("invalid")
    }
};