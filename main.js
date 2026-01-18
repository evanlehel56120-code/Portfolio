
const form = document.querySelector("form")

const nameInput = document.querySelector("#name")

const firstNameInput = document.querySelector("#first-name")

const nameError = document.querySelector("#name-error")

const firstnameError = document.querySelector("#first-name-error")

form.addEventListener("submit", function(event) {
    event.preventDefault()
    if (nameInput.value.length <2) {
        nameError.classList.remove("hidden")
    } else {
        nameError.classList.add("hidden")
        console.log("name:", nameInput.value);
    }
})
form.addEventListener("submit", function(event) {
    if (firstNameInput.value.length < 2) {
        firstnameError.classList.remove("hidden")
    } else {
        firstnameError.classList.add("hidden")
        console.log("name:", nameInput.value);
    }
})


