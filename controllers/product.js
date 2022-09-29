const Product = require('../models/Product');

exports.getAllProducts = (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            res.status(500).send(err);
        } else if (products.length === 0) {
            res.status(404).send('No products found');
        } else {
            res.status(200).json(products);
        }
    });
}

exports.addProduct = (req, res) => {
    const product = new Product(req.body);
    product.save((err, product) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(product);
        }
    });
}

exports.getProductById = (req, res) => {
    Product.find({ id: req.params.id }, (err, product) => {
        if (err) {
            res.status(500).send(err);
        } else if (!product.length) {
            res.status(404).send('No product found');
        } else {
            res.status(200).json(product);
        }
    });
}