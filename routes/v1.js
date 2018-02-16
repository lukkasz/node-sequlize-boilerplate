const  express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.send('Hellouu');
});

// TEST ROUTE
// POST /test
router.post('/test', (req, res) => {
  var body = req.body;
  res.json({status: "success", message: "Wine tasting API", data: body });
})


module.exports = router;