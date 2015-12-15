var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('InventoryGroup', {
    queryBy: ['year'],
    orderBy: 'year',
  });
});

router.get('/:id', function(req) {
  return req.store.recordItemById('InventoryGroup', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('InventoryGroup', {
  });
});

module.exports = router;
