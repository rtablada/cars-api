module.exports = {
  NewsArticle: require('./news-article'),
  User: require('./user'),

  oauth: {
    AccessTokens: require('./oauth/access-tokens'),
    RefreshTokens: require('./oauth/access-refresh-tokens'),
    Clients: require('./oauth/clients'),
  },
};
