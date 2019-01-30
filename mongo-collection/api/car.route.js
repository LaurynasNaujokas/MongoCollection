const express = require('express');
const carRoutes = express.Router();

let Car = require('./car.model');

// Defined store route
carRoutes.route('/add').post(function (req, res) {
  let car = new Car(req.body);
  car.save()
    .then(celebrity => {
      res.status(200).json({'car': 'car was added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
carRoutes.route('/').get(function (req, res) {
    Car.find(function(err, cars){
    if(err){
      console.log(err);
    }
    else {
      res.json(cars);
    }
  });
});

module.exports = carRoutes;