const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

// Get all products
router.get('/', ProductController.getAllProducts);

// Add a product
router.post('/', ProductController.addProduct);

// Update a product
router.patch('/:id', ProductController.updateProduct);
module.exports = router;