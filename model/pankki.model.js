const mongoose = require('mongoose');

const PankkiSchema = new mongoose.Schema({
    nimi: {
        type: String
    },
    socialSecurity: {
        type: String
    },
    saldo: {
        type: String
    }
});

mongoose.model("customers", PankkiSchema)