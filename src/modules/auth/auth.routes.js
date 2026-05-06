const router = require('express').Router();
// const controller = require('./auth.controller');
// const {login, logout} = require('./auth.controller');
// import { login } from './auth.controller';
// import {express, router} from 'express';
// import { login } from './auth.controller';
// const router = require('express').Router();
const controller = require('./auth.controller');

router.post('/login', controller.login);
router.post('/register', controller.register);

// router.get('/logout', logout);

module.exports = router;
