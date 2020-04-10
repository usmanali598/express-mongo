const connect = require('./model');
const express = require('express');
const app = express();
const path = require('path');
const expressHandlerbars = require('express-handlebars');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({
    extended: true
}));


app.use('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.listen('3000', () => {
    console.log('app is on 3000')
})