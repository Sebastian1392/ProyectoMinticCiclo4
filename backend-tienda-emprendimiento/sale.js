const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    products: [
        {
            idProduct: String,
            price: Number,
            quantity: Number,
        }
    ],    
    totalProducts: Number,
    totalPrice: Number
});

const Sale = mongoose.model("ventas", saleSchema);
module.exports = Sale;