const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Items', ItemSchema);