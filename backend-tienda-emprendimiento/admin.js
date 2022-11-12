// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const dataBase = require('./data');
const express = require('express'); //se importa el marco de trabajo
const mongoose = require('mongoose')
const Product = require('./product');

const app = express(); //se crea una instancia de la aplicación express
const port = 3000; // se configura el puerto
const url = "mongodb+srv://theencodingteam:theencodingteam@clusterproductos.rzruckt.mongodb.net/tiendaEmprendimiento";

app.use(express.json());

mongoose.connect(url)
    .then(()=>console.log("conectado a mongodb"))
    .catch(e=>console.log("error de conexión",e));


app.get('/productos/admin', async (req, res) => {
    // const productList = await Product.find({stock: {$gt : 0}});
    const productList = await Product.find();
    console.log(productList);
    try {
        res.send(productList);
    } catch (error) {
        console.log("error", error)
    }
});

app.post('/producto/admin', async (req, res) => {
    const product = req.body;
    console.log("info:",product);
    try {
        const productDB = new Product(product);
        await productDB.save();
        res.send('Producto agregado correctamente');
    } catch (error) {
        console.log("error",error)
    } 
});

app.get('/producto/admin/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOne({_id:id});
        res.send(product);
    } catch (error) {
        console.log("error", error)
    }
});

app.delete('/producto/admin/:id', async (req, res) => {
    const id = req.params.id
    try {
        await Product.deleteOne({_id:id});
        res.send('El producto ha sido eliminado de la base de datos');
    } catch (error) {
        console.log("error", error)
    }
});

app.put('/producto/admin/:id', async (req, res) => {
    const id = req.params.id
    const newProduct = req.body;
    try {
        await Product.findByIdAndUpdate(id, newProduct, { useFindAndModify: false });
        res.send('El producto se actualizó correctamente');
    } catch (error) {
        console.log("error", error)
    }
});

app.post('/producto-stock/:id', async (req, res) => {
    const id = req.params.id
    const stockQuantity = req.body.quantity;
    const actualStock = await Product.findOne({_id:id});
    console.log(actualStock);
    try {
        await Product.findByIdAndUpdate(id, {stock:(stockQuantity + actualStock.stock)}, { useFindAndModify: false });
        res.send('Se actualizó el stock del producto correctamente correctamente');
    } catch (error) {
        console.log("error", error)
    }
});

app.listen(port,()=>console.log(`App Libro está en el puerto ${port}!`));