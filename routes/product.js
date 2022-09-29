const express = require('express');
const { getAllProducts, addProduct, getProductById, deleteProductById, updateProductById } = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/').post(addProduct);
router.route('/:id').get(getProductById);
router.route('/:id').delete(deleteProductById);
router.route('/:id').put(updateProductById);

module.exports = router;