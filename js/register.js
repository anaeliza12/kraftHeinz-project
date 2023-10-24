const dataUser = document.getElementById("username")
const dataPassword = document.getElementById("password")
const dataEmail = document.getElementById("email")


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
    const url = "http://localhost:8080/registerData/auth"
    try {

        const connection = await fetch(url,options)
        const response = connection.status

        if (response == 200) {
            const log = await connection.text()
            alert(log)

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
