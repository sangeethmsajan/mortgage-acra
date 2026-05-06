const router = require('express').Router();
const controller = require('./order.controller');

router.post('/', controller.createOrder);
router.get('/:id', controller.getOrder);

module.exports = router;
