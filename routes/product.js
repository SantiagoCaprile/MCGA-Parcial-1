const express = require('express');
const { getAllProducts, addProduct, getProductById, deleteProductById } = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/').post(addProduct);
router.route('/:id').get(getProductById);
router.route('/:id').delete(deleteProductById);

module.exports = router;