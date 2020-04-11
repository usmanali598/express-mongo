const connect = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const Handlebars = require('handlebars');
const expressHandlerbars = require('express-handlebars');
const bodyparser = require('body-parser');

const clientController = require('./controllers/clients');

app.use( express.json() )
app.use(bodyparser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, '/views/'))

app.engine("hbs", expressHandlerbars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + '/views/layouts',
}))

app.set("view engine", "hbs")


app.use('/client', clientController)
const port = process.env.PORT || 3000;

app.listen( port, () => console.log( 'server is on port: ' + port ) )