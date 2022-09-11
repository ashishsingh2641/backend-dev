const mongoose = require('mongoose');

const headphonesSchema = new mongoose.Schema({
    color: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
        min: 10
    },
    subTitle: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    alignLeft: {
        type: Boolean,
        required: false
    },
    ProductTitle: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('headphones', headphonesSchema);