const Product = require('../models/product');

const createProduct = (req, res) => {
    const { pname, description, price, stock } = req.body;
    Product.create({ pname, description, price, stock }, (err, result) => {
        if (err) return res.status(500).send('Error creating product');
        res.status(201).send('Product created successfully');
    });
};

const getProducts = (req, res) => {
    Product.findAll((err, results) => {
        if (err) return res.status(500).send('Error fetching products');
        res.status(200).send(results);
    });
};

const getProductById = (req, res) => {
    const pid = req.params.pid;
    Product.findById(pid, (err, results) => {
        if (err || results.length === 0) return res.status(404).send('Product not found');
        res.status(200).send(results[0]);
    });
};

const updateProduct = (req, res) => {
    const pid = req.params.pid;
    const { pname, description, price, stock } = req.body;
    Product.update(pid, { pname, description, price, stock }, (err, result) => {
        if (err) return res.status(500).send('Error updating product');
        res.status(200).send('Product updated successfully');
    });
};

const deleteProduct = (req, res) => {
    const pid = req.params.pid;
    Product.delete(pid, (err, result) => {
        if (err) return res.status(500).send('Error deleting product');
        res.status(200).send('Product deleted successfully');
    });
};

module.exports = { createProduct, getProducts, getProductById, updateProduct, deleteProduct };