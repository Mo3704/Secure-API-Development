const db = require('../db/config.js');

class Product {
    static create(product, callback) {
        const query = 'INSERT INTO Products (pname, description, price, stock) VALUES (?, ?, ?, ?)';
        db.query(query, [product.pname, product.description, product.price, product.stock], callback);
    }

    static findAll(callback) {
        const query = 'SELECT * FROM Products';
        db.query(query, callback);
    }

    static findById(pid, callback) {
        const query = 'SELECT * FROM Products WHERE pid = ?';
        db.query(query, [pid], callback);
    }

    static update(pid, product, callback) {
        const query = 'UPDATE Products SET pname = ?, description = ?, price = ?, stock = ? WHERE pid = ?';
        db.query(query, [product.pname, product.description, product.price, product.stock, pid], callback);
    }

    static delete(pid, callback) {
        const query = 'DELETE FROM Products WHERE pid = ?';
        db.query(query, [pid], callback);
    }
}

module.exports = Product;