const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/firstTest',  { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log('Success is made!');
    } else {
        console.log('error: '+error)
    }
})