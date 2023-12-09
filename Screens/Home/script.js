// This line ain't necessary, but it's good a good practice to use it.
// It makes sure the script executes after the DOM renders. 

document.addEventListener('DOMContentLoaded', function() {

    var registerForm = document.getElementById("registerLink");
    
    var emailField = document.getElementById("emailField");
    var passwordField = document.getElementById("passwordField");

    // And here comes the magic
    registerForm.addEventListener("click", function(event) {

        // NOTE: Delete this line after assigning a link to the <a> tag
        event.preventDefault();

        // Cambia el texto del enlace para futuros clics
        // registerLink.textContent = "¿Ya tienes una cuenta? ¡Haz click aquí para iniciar sesión!";

        // Making the original form dissapear 
        loginForm.style.display = "none";

        // New form
        var registerForm = document.createElement("form");
        registerForm.classList.add("registerForm");

        /** 
        registerForm.innerHTML = "
            <label for="email">Email</label>
            " **/
          

    })
})

document.addEventListener('DOMContentLoaded', function() {
    var myForm = document.getElementById("myForm");

    myForm.addEventListener("submit", function(event) {
        // Evita que el formulario se envíe de forma predeterminada
        event.preventDefault();

        // Redirige a otra página
        window.location.href = "../MainPage/main.html";
    });
});



