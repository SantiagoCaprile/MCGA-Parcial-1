const express = require('express');
const { getAllProducts, addProduct, getProductById } = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/').post(addProduct);
router.route('/:id').get(getProductById);

module.exports = router;