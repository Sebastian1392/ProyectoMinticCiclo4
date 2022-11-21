const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    imgUrl: String
});

const Product = mongoose.model("productos", productSchema);

module.exports = Product;