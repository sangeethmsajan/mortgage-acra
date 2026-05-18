const router = require('express').Router();
const controller = require('./dashboard.controller');

router.get('/', controller.getData);


module.exports = router;
