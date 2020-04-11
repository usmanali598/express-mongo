const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('customers');

router.get('/add', (req, res) => {
    res.render('addCustomers')  
})

router.post('/add', (req, res) => {
    res.render('addCustomers')  
})

router.get('/list', (req, res) => {

     var customer = new CustomerModel();
     customer.nimi = 'Jet Lee';
     customer.socialSecurity = '154478-659W';
     customer.saldo = '15440';
     customer.save((err, res) => {
        if (!err) {
             res.redirect('/client/list')
        } else {
            res.send("Error!")
         }
     });

    CustomerModel.find((err, docs) => {
        if (!err) {
            console.log(docs, 'ocs are')
            res.render('list', {data : docs})
        }
        else {
            console.log(err)
        }
    })
})

module.exports = router;