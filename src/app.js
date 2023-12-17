// Importa el módulo 'express' para crear y manejar la aplicación web
const express = require('express');

// Importa el motor de plantillas 'express-handlebars' para renderizar vistas HTML
const { engine } = require('express-handlebars');

const myconnection = require('express-myconnection');
const mysql = require('mysql');
const session = require('express-session');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const app = express();

app.set('port', 4001);
app.set('views', __dirname + '/views')

app.engine('.hbs', engine({
    extname: '.hbs',
}));

app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'nodelogin'
}));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.use('/', loginRoutes);

app.get('/', (req, res) => {
    res.render('home');
});
