var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');

var app = express();

require('./bootstrap/middleware')(app);
// Session and mail aren't needed. If you want it THERE BE DRAGONS
// require('./bootstrap/session')(app);
// require('./bootstrap/mail')(app);
require('./bootstrap/mongo');
require('./app/models');
require('./bootstrap/passport')(app);
require('./app/transformers');
app.use(require('./app/middleware/xmen'));
app.use(require('./app/middleware/origin-signing'));

app.oauth = require('./app/oauth');

app.all('/oauth/token', app.oauth.grant());
var routes = require('./app/http/routes');
app.use('/', routes);

require('./bootstrap/errors')(app);

app.use(app.oauth.errorHandler());

module.exports = app;
