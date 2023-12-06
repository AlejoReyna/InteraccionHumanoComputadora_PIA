// nombre de usuario en variable
var userName = "UsuarioEjemplo";

// referencia del div con id "welcomeMessage"
var welcomeElement = document.getElementById("welcomeMessage");

// condicional para modificar el texto

if (welcomeElement) {
    // modificar el texto
    welcomeElement.innerHTML = "Bienvenido, " + userName;
    } else {
        console.error("Elemento con id 'welcomeMessage' no encontrado.");
    } 
    