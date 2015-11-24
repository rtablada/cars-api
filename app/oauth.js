var oauthserver = require('oauth2-server');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OAuthAccessTokensModel = mongoose.model('OAuthAccessTokens');
var OAuthRefreshTokensModel = mongoose.model('OAuthRefreshTokens');
var OAuthClientsModel = mongoose.model('OAuthClients');
var User = mongoose.model('User');

var model = {
  getAccessToken(bearerToken, callback) {
    console.log('in getAccessToken (bearerToken: ' + bearerToken + ')');

    OAuthAccessTokensModel.findOne({ accessToken: bearerToken }, callback);
  },

  getClient(clientId, clientSecret, callback) {
    console.log('in getClient (clientId: ' + clientId + ', clientSecret: ' + clientSecret + ')');
    if (clientSecret === null) {
      return OAuthClientsModel.findOne({ clientId: clientId }, callback);
    }

    OAuthClientsModel.findOne({ clientId: clientId, clientSecret: clientSecret }, callback);
  },

  grantTypeAllowed(clientId, grantType, callback) {
    console.log('in grantTypeAllowed (clientId: ' + clientId + ', grantType: ' + grantType + ')');

    if (grantType === 'password') {
      return callback(false, true);
    }

    callback(false, true);
  },

  saveAccessToken(token, clientId, expires, userId, callback) {
    console.log('in saveAccessToken (token: ' + token + ', clientId: ' + clientId + ', userId: ' + userId + ', expires: ' + expires + ')');

    var accessToken = new OAuthAccessTokensModel({
      accessToken: token,
      clientId: clientId,
      expires: expires,
      user: userId,
    });

    accessToken.save(callback);
  },

  getUser(username, password, callback) {
    console.log('in getUser (username: ' + username + ', password: ' + password + ')');

    User.findOne({ email: username }, function(err, user) {
      if (err) {
        return callback(err);
      }

      user.checkPassword(password, function() {
        return callback(null, user._id);
      },

      function() {
        return callback('Password does not match');
      });
    });
  },

  saveRefreshToken(token, clientId, expires, userId, callback) {
    console.log(`in saveRefreshToken (token: ${token}, clientId: ${clientId}, userId: ${userId}, expires: ${expires})`);

    var refreshToken = new OAuthRefreshTokensModel({
      refreshToken: token,
      clientId: clientId,
      userId: userId,
      expires: expires,
    });

    refreshToken.save(callback);
  },

  getRefreshToken(refreshToken, callback) {
    console.log('in getRefreshToken (refreshToken: ' + refreshToken + ')');

    OAuthRefreshTokensModel.findOne({ refreshToken: refreshToken }, callback);
  },
};

module.exports = oauthserver({
  model,
  grants: ['password', 'refresh_token'],
  debug: true,
});
