const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

// modal for the user who can add thair Hotel

const  ResturentsSchema = mongoose.Schema({
    restaurantName: {
        type:String,
        required: true,
        unique: true
    },
    description: {
        type:String,
        required: true
    },
    restaurantFullAddress: {
        type: String,
        required: true
    },
    lat: {
        type: String,
        required: true
    },
    lon: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        required: true
    },
    contactEmail: {
        type: String,
        required: true
    },
    restaurantPhone:{
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});


//Resturents.plugin(uniqueValidator)

const Resturents = mongoose.model('Resturents', ResturentsSchema);

module.exports = Resturents;
    