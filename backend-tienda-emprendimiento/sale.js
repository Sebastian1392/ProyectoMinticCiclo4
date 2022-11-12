const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const saleSchema = new Schema({
    product: [
        {
            _id: String,
            price: Number,
            quantity: Number,
        }
    ],    
    totalProducts: Number,
    totalPrice: Number
});

const Sale = mongoose.model("ventas", saleSchema);
module.exports = Sale;