const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const carRoute = require('./car.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Something went wrong'+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/car', carRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});