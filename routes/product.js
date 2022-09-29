const express = require('express');
const { getAllProducts, addProduct } = require('../controllers/product');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/').post(addProduct);

module.exports = router;