var Mystique = require('mystique');

var InventoryHistoryTransformer = Mystique.Transformer.extend({
  resourceName: 'inventoryHistory',
  mapOut: function(inventory) {
    return {
      id: inventory.id,
      checkIn: inventory.checkIn,
      checkOut: inventory.checkOut,
      inventoryGroup: inventory.inventoryGroup,
    };
  },

  mapIn(req) {
    return {
      checkIn: req.body.inventoryHistory.checkIn,
      checkOut: req.body.inventoryHistory.checkOut,
      inventoryGroup: req.body.inventoryHistory.inventoryGroup,
    };
  },
});

Mystique.registerTransformer('InventoryHistory', InventoryHistoryTransformer);
