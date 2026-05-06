const router = require('express').Router();

router.use('/orders', require('../modules/order/order.routes'));
router.use('/auth', require('../modules/auth/auth.routes'));

module.exports = router;
