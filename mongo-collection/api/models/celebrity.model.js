//Celebrity model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Celebrity = new Schema({
    person_name: {
        type: String
    },
    person_age: {
        type: Number
    },
    person_movie: {
        type: String
    },
    person_gender: {
        type: String
    }
    },{

        collection: 'celebrity'
});

module.exports = mongoose.model('Celebrity', Celebrity);