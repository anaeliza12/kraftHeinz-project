const dataEmail = document.getElementById("username")
const dataPassword = document.getElementById("password")

const loginData = {
    password: "",
    username: ""
    

}
const login = async () => {

    const options = {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const url = "http://localhost:8080/login/auth"
    try {

        const connection = await fetch(url,options)
        const response = connection.status

        if (response == 200) {
            const log = await connection.text()
           
            window.location.href = "http://127.0.0.1:5501/html/mainpage.html"

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

        loginData.username = dataEmail.value
        loginData.password = dataPassword.value

        login()
        
    })

})
