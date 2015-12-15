var express = require('express');
var router = express.Router();
var apiRouter = express.Router();
var oauth = require('../oauth');

var authFilter = require('./filters/auth');

var register = require('./resources/register');

apiRouter.use('/register', register);

var cars = require('./resources/cars');

apiRouter.use('/cars', cars);
apiRouter.use('/inventoryGroups', require('./resources/inventory-group'));

router.use('/api', apiRouter);

module.exports = router;
