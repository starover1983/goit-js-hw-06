const formSubmit = document.querySelector(".login-form");
formSubmit.addEventListener('submit', onsubmit);
function onsubmit(e) {
    e.preventDefault()
    const { email, password } = e.currentTarget.elements;
    if (email.value && password.value) {
        const arr = {
            email: email.value,
            password: password.value
        }
        console.log(arr);
        e.currentTarget.reset();
        }
     else {
        alert("Всі поля повинні бути заповнені!")
    }
      


}

