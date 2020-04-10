const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pankki',  { useUnifiedTopology: true, useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log('Successful connection!');
    } else {
        console.log('error: '+error)
    }
})