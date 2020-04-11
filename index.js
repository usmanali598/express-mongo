const connect = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const expressHandlerbars = require('express-handlebars');
const bodyparser = require('body-parser');

const clientController = require('./controllers/clients');

app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, '/views/'))

app.engine("hbs", expressHandlerbars({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname + '/views/layouts'
}))

app.set("view engine", "hbs")


app.use('/client', clientController)

app.listen('3000', () => {
    console.log('app is on 3000')
})