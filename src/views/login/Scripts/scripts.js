// This function changes the form, from LogIn to SignUp

document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.createElement('form');
    registerForm.id = 'registeForm';
    registerForm.style.display = 'none';
    registerForm.innerHTML = '<form method'

    // Create username input
    const usernameField= document.createElement('div');
    usernameField.className = 'usernameField';
    usernameField.innerHTML = '<label for="username"> Nombre de Usuario </label> <input type="text" id="username" name="username">';
    
    // Create email input
    const emailField = document.createElement('div');
    emailField.className = 'emailField';
    emailField.innerHTML = '<label for="email"> Correo Electrónico </label> <input type="email" id="email" name="email">';
    
    // Create password input
    const passwordField = document.createElement('div');
    passwordField.className = 'passwordField';
    passwordField.innerHTML = '<label for="password"> Contraseña </label> <input type="password" id="password" name="password">';

    //Create repeatPassword input
  
    const repeatPasswordField = document.createElement('div');
    repeatPasswordField.className = 'repeatPasswordField';
    repeatPasswordField.innerHTML = '<label for="repeatPassword"> Repetir Contraseña </label> <input type="password" id="password" name="repeatPassword">';
    
    // Create registerButton input
    const registerButton = document.createElement('input');
    registerButton.type = 'submit';
    registerButton.value = 'Registrar'
    registerButton.id = 'registerButton';

    // Change 'Registrate ahora' for 'Inicia Sesión!
    const loginActivator = document.createElement('div');
    loginActivator.className = 'loginActivator';
    loginActivator.innerHTML = '<p> ¿Ya estás registrado? <span> <a href="" id="loginButton"> Inicia Sesión </a></span> </p>';

    registerForm.appendChild(usernameField);
    registerForm.appendChild(emailField);
    registerForm.appendChild(passwordField);
    registerForm.appendChild(repeatPasswordField); 
    registerForm.appendChild(registerButton);
    registerForm.appendChild(loginActivator);

    loginForm.parentNode.insertBefore(registerForm, loginForm.nextSibling);

    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', function(e) {
        e.preventDefault();

        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
    });

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Alternate form visibility
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';

        
    });
});


// Code for the dropdown menu

document.addEventListener('DOMContentLoaded', function() {

document.getElementById('menuIcon').addEventListener('click', function() {
    var menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('show-menu');
  });

document.getElementById('backPage').addEventListener('click', function(){
    var menu = document.getElementById('dropdown-menu');
    menu.classList.remove('show-menu');
})
});