module.exports = {
  User: require('./user'),
  Car: require('./car'),
  InventoryGroup: require('./inventory-group'),
  InventoryHistory: require('./inventory-history'),

  oauth: {
    AccessTokens: require('./oauth/access-tokens'),
    RefreshTokens: require('./oauth/access-refresh-tokens'),
    Clients: require('./oauth/clients'),
  },
};
