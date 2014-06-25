var express = require('express'),
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/ajax', function(req, res) {
  var data = {
    "id": +new Date(),
    "children": [
      {
        "id": Math.random(),
        "names": ["test", "test2"]
      },
      {
        "id": Math.random(),
        "names": ["test", "test2"]
      },
      {
        "id": Math.random(),
        "names": ["test", "test2"]
      },
      {
        "id": Math.random(),
        "names": ["test", "test2"]
      },
      {
        "id": Math.random(),
        "names": ["test", "test2", "test2", "test2", "test2"]
      }
    ]
  }
  res.json(data);
});

router.get('/demo/:id', function(req, res){
  res.render(req.params.id);
});

module.exports = router;
