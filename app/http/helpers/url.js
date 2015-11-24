module.exports = function(baseUrl) {
  return {
    index: function() {
      return baseUrl;
    },

    create: function() {
      return baseUrl + '/new';
    },

    store: function() {
      return baseUrl;
    },

    show: function(id) {
      return baseUrl + '/' + id;
    },

    edit: function(id) {
      return baseUrl + '/' + id + '/edit';
    },

    update: function(id) {
      return baseUrl + '/' + id;
    },

    destroy: function(id) {
      return baseUrl + '/' + id;
    },
  };
};
