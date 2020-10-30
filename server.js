const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(
    `mongodb+srv://rifat:${process.env.DB_PASS}@cluster0.v2d9h.mongodb.net/mild-store?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

const Product = mongoose.model(
    'Products',
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String]
    })
);

app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.get('/api/product/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
});

app.post('/api/product', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete('/api/product/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const Order = mongoose.model(
    'Order',
    new mongoose.Schema(
        {
            _id: {
                type: String,
                default: shortid.generate
            },
            email: String,
            name: String,
            address: String,
            total: Number,
            cartItems: [
                {
                    _id: String,
                    title: String,
                    price: Number,
                    count: Number
                }
            ]
        },
        {
            timestamps: true
        }
    )
);

app.get('/api/orders', async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});

app.post('/api/orders', async (req, res) => {
    if (
        (!req.body.name ||
            !req.body.email ||
            !req.body.address ||
            !req.body.cartItems,
        !req.body.total)
    ) {
        return res.send({ message: 'Data is required.' });
    }

    const order = await Order(req.body).save();
    res.send(order);
});

app.delete('/api/order/:id', async (req, res) => {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    res.send(deletedOrder);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('The server is running on port ' + PORT));
