var express = require('express');
var router = express.Router();

router.get('/', function(req) {
  return req.store.recordCollection('Car', {
    queryBy: ['year'],
    orderBy: 'year',
  });
});

router.get('/:id', function(req) {
  return req.store.recordItemById('Car', req.params.id);
});

router.post('/', function(req) {
  return req.store.createRecord('Car', {
  });
});

module.exports = router;
