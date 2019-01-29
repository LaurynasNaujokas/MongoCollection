const express = require('express');
const celebrityRoutes = express.Router();

let Celebrity = require('./celebrity.model');

// Defined store route
celebrityRoutes.route('/add').post(function (req, res) {
  let celebrity = new Celebrity(req.body);
  celebrity.save()
    .then(celebrity => {
      res.status(200).json({'celebrity': 'celebrity in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
celebrityRoutes.route('/').get(function (req, res) {
    Celebrity.find(function(err, celebrities){
    if(err){
      console.log(err);
    }
    else {
      res.json(celebrities);
    }
  });
});

module.exports = celebrityRoutes;