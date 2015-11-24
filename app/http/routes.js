var express = require('express');
var router = express.Router();
var apiRouter = express.Router();

var authFilter = require('./filters/auth');

var register = require('./resources/register');

apiRouter.use('/register', register);

router.use('/api', apiRouter);

module.exports = router;
