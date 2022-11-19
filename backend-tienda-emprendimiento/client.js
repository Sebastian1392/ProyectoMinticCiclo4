// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');
// const dataBase = require('./data');
const express = require('express'); //se importa el marco de trabajo
const cors = require("cors");
const mongoose = require('mongoose')
const Product = require('./product');
const Sale = require('./sale');

const app = express(); //se crea una instancia de la aplicación express
const port = 3001; // se configura el puerto
const url = "mongodb+srv://theencodingteam:theencodingteam@clusterproductos.rzruckt.mongodb.net/tiendaEmprendimiento";

app.use(express.json());
app.use(
	cors({
		origin: "*",
	})
);

mongoose.connect(url)
    .then(()=>console.log("conectado a mongodb"))
    .catch(e=>console.log("error de conexión",e));

let cartProducts = [];

app.get('/productos/client', async (req, res) => {
	try {
		const productList = await Product.find({ stock: { $gt: 0 } });
		res.send(productList);
	} catch (error) {
		console.log("error: ", error);
	}
});

app.get('/productos/client/:id', async (req, res) => {
	try {
        const product = await Product.findById(req.params.id);
		res.send(product);
	} catch (error) {
		console.log("error: ", error);
	}
});

// Parte modificación del producto // PUT
app.put('/productos/client/:id', async( req, res ) => {

    const { id } = req.params;
    const body = req.body;

    try {
        // Validar la existencia del producto en BD
        const existsProduct = await Product.findById( id );
        if ( !existsProduct ) {
            return res.status(404).json({ok: false, msg: "El producto no existe."});
        }

        await Product.findByIdAndUpdate(id, body);
        return res.json({ok:true, msg: "¡Producto actualizado con éxito!"});

    } catch (error) {
        return res.status(500).json({ok:false,msg:"Hubo un error inesperado."})
    }
})
// //

app.get('/carrito/client', (req, res) => {
	res.send(cartProducts);
});

app.post('/agregar-producto/client/', async (req, res) => {
	const {id} = req.body;
    if(cartProducts.some( product => id === product.idProduct)) {
        const index = cartProducts.findIndex(product => id === product.idProduct);
        cartProducts[index].quantity += 1;
    } else {
        const product = await Product.findById(id);
        cartProducts.push({ idProduct: id,price: product.price, quantity: 1});
    }
	res.send(cartProducts);
});

app.put('/agregar-venta/client/', async (req, res) => {
    if (cartProducts != []) {
        let totalProducts = 0;
        let totalPrice = 0;
        await Promise.all(cartProducts.map(async ({idProduct, price, quantity}) => {
            const product = await Product.findById(idProduct);
            const stock = product.stock - quantity;
            totalProducts += quantity;
            totalPrice += price * quantity;
            await Product.findByIdAndUpdate(idProduct, {stock: stock}, { useFindAndModify: false });
        }));
        let body = {products : cartProducts};
        body["totalProducts"] = totalProducts;
        body["totalPrice"] = totalPrice;  
        body["saleDate"] = new Date().toLocaleDateString();  
        const sale = new Sale(body);
        sale.save();
        cartProducts = [];
    }
    res.send(cartProducts); 
});

app.listen(port, () => console.log(`App Libro está en el puerto ${port}!`));
