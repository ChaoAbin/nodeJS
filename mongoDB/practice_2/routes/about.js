var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/aa', function(req, res) {
  //res.render('about', { title: 'ha' });
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello World About");
});
 
module.exports = router;