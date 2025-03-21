const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateToken, createProduct);
router.get('/', authenticateToken, getProducts);
router.get('/:pid', authenticateToken, getProductById);
router.put('/:pid', authenticateToken, updateProduct);
router.delete('/:pid', authenticateToken, deleteProduct);

module.exports = router;