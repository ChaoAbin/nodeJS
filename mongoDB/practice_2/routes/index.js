var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET bootstrap page. */
router.get('/bootstrap', function(req, res) {
	res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

/* 取得使用者清單 */
router.get('/userList', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
    	//res.end(JSON.stringify(docs));
    	res.json(docs);
    	/*
        res.render('userlist', {
            "userlist" : docs
        });
        console.log(docs);
        */
    });
    //res.json({test:"hello"});
});

/* 新增使用者 */
router.get('/userAdd', function(req, res) {
    // Set our internal DB variable
    var db = req.db;
 
    // Get our form values. These rely on the "name" attributes
    var userName = req.param('username');
    var Email = req.param('email');

    // Set our collection
    var collection = db.get('usercollection');
 
    // Submit to the DB
    collection.insert({
        "username" : userName,
        "email" : Email
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.json(false);
        }
        else {
            res.json(true);
        }
    });
});

module.exports = router;
