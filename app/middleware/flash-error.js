module.exports = function(req, res, next) {
  var all = req.flash('errors');
  var errors = (all && all[0]) || {};

  res.locals.errors = errors;

  next();
};
