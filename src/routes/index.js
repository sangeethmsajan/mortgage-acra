const router = require('express').Router();

router.use('/dashboard', require('../modules/dashboard/dashboard.routes'));
router.use('/products', require('../modules/product/product.routes'));
router.use('/orders', require('../modules/order/order.routes'));
router.use('/auth', require('../modules/auth/auth.routes'));

module.exports = router;
