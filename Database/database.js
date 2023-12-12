import { usernameField, emailField, passwordField } from '../CodeRewritten/LoginPage/Scripts/scripts';

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdata"
});

connection.connect(err) => {
    if (err) {
        console.log(err);
        return;
    }

    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        usernameField = registerForm.querySelector("input[name='nombre']").value;
        emailField = registerForm.querySelector("input[name='email']").value;
        passwordField = registerForm.querySelector("input[name='password']").value;

        const query = "INSERT INTO usuarios (username, email, password) VALUES (, ?, ?)";"

    })
}