// ---- 基本設定 ----
var express = require('express');
var app     = express();
var port    = process.env.PORT || 8080;
var fs      = require('fs');
// ---- ROUTES ----

// 舊方法
app.get('/sample', function(req, res) {
  res.send('this is a sample!');
});

// Express Router

// 建立 Router 物件
var router = express.Router();

// 首頁路由 (http://localhost:8080)
router.get('/', function(req, res) {
  res.send('home page!');
});

// 另一張網頁路由 (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('about page!');
});

router.get('/toHtml', function(req, res) {
    fs.readFile(__dirname + '/express2.html', function (err, data) {
        if (err) { 
            res.writeHead(500);
            return res.end('Error loading chat.html'); 
        }
        res.writeHead(200);
        res.end(data); 
    });
});

router.get('/getJson', function(req, res) {
    console.log("Request handler random was called.");
    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({ 
      anObject: otherObject, 
      anArray: otherArray, 
      another: "item"
    });
    res.end(json);
});

router.post('/getJson', function(req, res) {
    console.log("Request handler random was called.");
    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({ 
      anObject: otherObject, 
      anArray: otherArray, 
      another: "item"
    });
    res.end(json);
});


// 將路由套用至應用程式
app.use('/', router);

// ---- 啟動伺服器 ----
app.listen(port);