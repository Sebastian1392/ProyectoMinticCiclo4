// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const dataBase = require('./data');
const express = require('express'); //se importa el marco de trabajo
const mongoose = require('mongoose')
const Product = require('./product');

const app = express(); //se crea una instancia de la aplicación express
const port = 3001; // se configura el puerto
const url = "mongodb+srv://theencodingteam:theencodingteam@clusterproductos.rzruckt.mongodb.net/tiendaEmprendimiento?retryWrites=true&w=majority";

let carProducts = []

app.use(express.json());

mongoose.connect(url)
    .then(()=>console.log("conectado a mongodb"))
    .catch(e=>console.log("error de conexión",e));


app.get('/productos/client', async (req, res) => {
    const productList = await Product.find({stock: {$gt : 0}});
    console.log(productList);
    try {
        res.send(productList);
    } catch (error) {
        console.log("error", error)
    }
});

app.get('/agregar-producto/client/', async (req, res) => {
    const clientRequest = req.body
    try {
        const product = await Product.findOne({ _id: clientRequest.id });
        carProducts.push({ product: product, quantity:clientRequest.quantity});
        res.send(carProducts);
    } catch (error) {
        console.log("error", error)
    }
});



app.listen(port,()=>console.log(`App Libro está en el puerto ${port}!`));