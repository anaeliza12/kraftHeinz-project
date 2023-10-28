const dataUser = document.getElementById("username")
const dataPassword = document.getElementById("password")
const dataEmail = document.getElementById("email")
const lgpdFlag = document.querySelector("#lgpd-flag");
const submitButton = document.querySelector("input[type='submit']");


const registerData = {
    email: "",
    password: "",
    username: ""
    

}
const register = async () => {

    const options = {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const url = "http://localhost:8080/register"
    try {

        
        const connection = await fetch(url,options)
        const response = connection.status

        if (response == 201) {
            const log = await connection.text()
            submitButton.addEventListener("click", () => {
                if (!lgpdFlag.checked) {
                  alert("Você precisa aceitar os termos de LGPD para continuar.");
                  return false;
                }else
                window.location.href = "http://127.0.0.1:5501/html/mainpage.html"
              });


        } else if (response == 404) {

            alert("registerData failed. Please check your username and password.")
        }

    } catch (error) {
        console.log(error)
    }



}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form")

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        registerData.username = dataUser.value
        registerData.password = dataPassword.value
        registerData.email = dataEmail.value

        register()
        
    })

})
