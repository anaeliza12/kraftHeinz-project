const dataEmail = document.getElementById("email")
const passwordField = document.getElementById("password");
const passConfirmField = document.getElementById("confirmPass");


let email = null;

let passw = null;
let passConfirm = null;

const pass = async () => {

    const options = {
        method: "PUT",
        body: JSON.stringify({
            password: passwordField.value,
            confirmPass: passConfirmField.value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const url = "http://localhost:8080/reset-password"
    try {

        const connection = await fetch(url, options)
        const response = connection.status

        if (response == 200) {
            alert("Password changed successfully")

        } else if (response == 404) {
            alert("Login failed. Please check your username and password.")
        }

    } catch (error) {
        console.log(error)
    }



}
const reset = async () => {

    const options = {
        method: "POST",
        body: email,
        headers: {
            "Content-Type": "application/json"
        }
    }
    const url = "http://localhost:8080/reset-password"
    try {

        const connection = await fetch(url, options)
        const response = connection.status

        if (response == 200) {

            passwordField.removeAttribute("hidden");
            passConfirmField.removeAttribute("hidden")


        } else if (response == 404) {
            alert("Login failed. Please check your username and password.")
        }

    } catch (error) {
        console.log(error)
    }



}


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        if (passwordField.hasAttribute("hidden") && passConfirmField.hasAttribute("hidden") ) {
            // Se o campo de senha estiver oculto, chame a função `reset`
            email = dataEmail.value;
            reset();
        } else {
            // Se o campo de senha não estiver oculto, chame a função `pass`
            passw = passwordField.value;
            passConfirm = passConfirmField.value
            pass();
        }

    })



})