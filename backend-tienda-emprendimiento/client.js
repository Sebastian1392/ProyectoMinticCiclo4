// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const dataBase = require('./data');
const express = require("express"); //se importa el marco de trabajo
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./product");
const { request } = require("express");

const app = express(); //se crea una instancia de la aplicación express
const port = 3001; // se configura el puerto
const url =
	"mongodb+srv://theencodingteam:theencodingteam@clusterproductos.rzruckt.mongodb.net/tiendaEmprendimiento?retryWrites=true&w=majority";

let cartProducts = [];
const baseUrl = "/api/v1/client";

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

mongoose
	.connect(url)
	.then(() => console.log("conectado a mongodb"))
	.catch((e) => console.log("error de conexió:  ", e));

app.get(`${baseUrl}/products`, async (req, res) => {
	try {
		const productList = await Product.find({ stock: { $gt: 0 } });
		console.log(productList);
		res.send(productList);
	} catch (error) {
		console.log("error: ", error);
	}
});

app.get(`${baseUrl}/products/:id`, async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		res.send(product);
	} catch (error) {
		console.log("error: ", error);
	}
});

app.get(`${baseUrl}/cart`, (req, res) => {
	res.send(cartProducts);
});

app.post(`${baseUrl}/cart/addProduct`, (req, res) => {
	const {id} = req.body;
    if(cartProducts.some( product => id === product.id)) {
        const index = cartProducts.findIndex(product => id === product.id);
        cartProducts[index].quantity += 1;
    } else {
        cartProducts.push({ id, quantity: 1 });
    }
    console.log(cartProducts);
	res.send(cartProducts);
});

app.put(`${baseUrl}/cart/purchase`, async (req, res) => {
	await Promise.all(cartProducts.map(async ({id, quantity}) => {
        const product = await Product.findById(id);
        const stock = product.stock - quantity;
        return Product.findOneAndUpdate({_id: id}, {stock});
    }));
    cartProducts = [];
    res.send(cartProducts);
});

app.listen(port, () => console.log(`App Libro está en el puerto ${port}!`));
