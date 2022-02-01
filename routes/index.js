var express = require('express');
var router = express.Router();

/* GET Backend Homepage. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
/* GET fiddle data */
router.get('/fiddle_data', function(req, res, next) {
// fake inventory data
  var inventory = [
    {
      "id": 1,
      "name": "Fiddle 1",
      "price": "10.00",
      "description": "This is a fiddle",
      "image": "http://placehold.it/200x200"
    },
    {
      "id": 2,
      "name": "Fiddle 2",
      "price": "20.00",
      "description": "This is a fiddle",
      "image": "http://placehold.it/200x200"
    }
  ];
  res.json(inventory);
});



module.exports = router;
