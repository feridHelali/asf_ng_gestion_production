const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    label:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true,
        default:'Metalic'
    },
    stock:Number
});

module.exports = mongoose.model('Product',ProductSchema);


