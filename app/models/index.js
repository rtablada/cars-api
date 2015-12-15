module.exports = {
  User: require('./user'),
  Car: require('./car'),
  InventoryGroup: require('./inventory-group'),

  oauth: {
    AccessTokens: require('./oauth/access-tokens'),
    RefreshTokens: require('./oauth/access-refresh-tokens'),
    Clients: require('./oauth/clients'),
  },
};
