var Mystique = require('mystique');

var InventoryGroupTransformer = Mystique.Transformer.extend({
  resourceName: 'inventoryGroup',
  mapOut: function(inventory) {
    return {
      id: inventory.id,
      totalAvailability: inventory.totalAvailability,
      car: inventory.car,
      inventoryHistory: inventory.inventoryHistory,
    };
  },

  mapIn(req) {
    return {
      totalAvailability: req.body.inventoryGroup.totalAvailability,
      car: req.body.inventoryGroup.car,
    };
  },
});

Mystique.registerTransformer('InventoryGroup', InventoryGroupTransformer);
