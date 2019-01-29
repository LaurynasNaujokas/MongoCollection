
const express = require('express');
const CelebrityRoutes = express.Router();

let Celebrity = require('../models/celebrity.model');

CelebrityRoutes.route('/add').post(function(req,res) {
    let celebrity = new Celebrity(req.body);
    celebrity.save()
        .then(celebrity => {
            res.status(200).json({ 'celebrity' : 'celebrity was added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

CelebrityRoutes.route('/get').post(function(req,res) {
    Celebrity.find(function (err, celebrities) {
        if(err){
            console.log(err);
        }
        else{
            res.json(celebrities);
        }
    });
});
