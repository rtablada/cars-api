var express = require('express');
var router = express.Router();
var adminRouter = express.Router();
var apiRouter = express.Router();

var authFilter = require('./filters/auth');

var adminHomeResource = require('./resources/admin/home');
var adminUserResource = require('./resources/admin/users');

var sessionResource = require('./resources/session');
var passwordResetResource = require('./resources/password-reset');

adminRouter.use(authFilter);
adminRouter.use('/', adminHomeResource);
adminRouter.use('/users', adminUserResource);

router.use('/admin', adminRouter);
router.use('/api', apiRouter);
router.use('/', sessionResource);
router.use('/reset', passwordResetResource);

module.exports = router;
