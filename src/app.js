// Importa el módulo 'express' para crear y manejar la aplicación web
const express = require('express');

// Importa el motor de plantillas 'express-handlebars' para renderizar vistas HTML
const { engine } = require('express-handlebars');

// Importa el módulo 'express-myconnection' para manejar conexiones a la base de datos MySQL
const myconnection = require('express-myconnection');

// Importa el módulo 'mysql' para interactuar con la base de datos MySQL
const mysql = require('mysql');

// Importa el módulo 'express-session' para manejar sesiones de usuario
const session = require('express-session');

// Importa el módulo 'body-parser' para analizar el cuerpo de las solicitudes HTTP
const bodyParser = require('body-parser');

// Crea una nueva aplicación Express
const app = express();

// Configura el puerto en el que se ejecutará la aplicación
app.set('port', 4000);

// Configura el directorio de las vistas
app.set('views', __dirname + '/views')

// Configura el motor de plantillas para usar archivos '.hbs'
app.engine('.hbs', engine({
    extname: '.hbs',
}));

// Establece el motor de plantillas de la aplicación como 'hbs'
app.set('view engine', 'hbs');

// Configura la aplicación para usar 'body-parser' para analizar datos URL-encoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configura la aplicación para usar 'body-parser' para analizar datos JSON
app.use(bodyParser.json());

// Inicia el servidor en el puerto especificado
app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.get('/', (req, res) => {
    res.render('home');
});

