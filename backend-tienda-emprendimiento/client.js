// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const dataBase = require('./data');
const express = require('express'); //se importa el marco de trabajo
const mongoose = require('mongoose')
const Product = require('./product');
const Sale = require('./sale');

const app = express(); //se crea una instancia de la aplicación express
const port = 3001; // se configura el puerto
const url = "mongodb+srv://theencodingteam:theencodingteam@clusterproductos.rzruckt.mongodb.net/tiendaEmprendimiento";

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

/*
Datos para probar POST en postman:
{
    "product":[
        {
            "_id": "636ef768360f4b5dad1c9c57",
            "price": 45.96,
            "quantity": 2
        },
                {
            "_id": "636f34fbbef9cdb69656a430",
            "price": 45.96,
            "quantity": 2
        },
                {
            "_id": "636f36e2390e0647bcfbafd5",
            "price": 45.96,
            "quantity": 2
        }
    ]
}
*/

app.post('/agregar-venta', async(req, res) => {
    let products = req.body.product;
    let totalProducts = 0;
    let totalPrice = 0;

    for(let i = 0; i < products.length; i++) {
        let obj = products[i];
        totalPrice += (obj.price * obj.quantity);
        totalProducts += obj.quantity;
    }

    let body = req.body;
    body["totalProducts"] = totalProducts;
    body["totalPrice"] = totalPrice;   

    const sale = new Sale(req.body);
    sale.save()
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

app.listen(port,()=>console.log(`App Libro está en el puerto ${port}!`));