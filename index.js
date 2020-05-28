const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

//configurar express-handlebarscomo nuestro motor de vista:
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.use(express.static('public'))

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('site/index');
});

app.get('/index', (req, res) => {
    res.render('site/index');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});