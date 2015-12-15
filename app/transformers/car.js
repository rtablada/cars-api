var Mystique = require('mystique');

var CarTransformer = Mystique.Transformer.extend({
  resourceName: 'car',
  mapOut: function(car) {
    return {
      id: car.id,
      year: car.year,
      model: car.model,
      make: car.make,
    };
  },

  mapIn(req) {
    return {
      year: req.body.car.year,
      model: req.body.car.model,
      make: req.body.car.make,
    };
  },
});

Mystique.registerTransformer('Car', CarTransformer);
