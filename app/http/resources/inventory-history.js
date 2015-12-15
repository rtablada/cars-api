var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('InventoryHistory', {});
});

router.get('/:id', function(req) {
  return req.store.recordItemById('InventoryHistory', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('InventoryHistory', {
  });
});

module.exports = router;
