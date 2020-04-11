const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const CustomerModel = mongoose.model('customers');

router.get('/', (req, res) => {
    CustomerModel.find()
    .sort( { date: -1 } )
    .then( items => res.json( items ) );
    // res.send('Controller file')  
})

router.get('/add', (req, res) => {
    res.render('addCustomers')  
})

router.post('/add', (req, res) => {
    var customer = new CustomerModel();
    customer.nimi = req.body.nimi;
    customer.socialSecurity = req.body.socialSecurity;
    customer.saldo = req.body.saldo;
    customer.save((err, doc) => {
       if (!err) {
           res.redirect('/client/');
        //    res.json({message:'successful', status:'ok'})
       } else {
           res.send(err, "Error!")
        }
    });

})

/* router.get('/list', (req, res) => {
    CustomerModel.find((err, docs) => {
        if (!err) {
            //  console.log(docs[0], 'ocs are')
            res.render('list', {data : docs})
        }
        else {
            console.log(err, 'error is reason!')
        }
    })    
}) */



module.exports = router;