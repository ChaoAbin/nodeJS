var express = require('express');
var app = express.createServer();

//第一條路由規則被執行
app.all('/user/:username', function(req, res, next) {
    console.log('all methods captured');
    next();
});

//next()轉移控制權，執行第二條規則
app.get('/user/:username', function(req, res) {
    res.send('user: ' + req.params.username);
});