var express = require('express');
var crypto=require('crypto'); //加密模块
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '用户登录',message:'Node.js+Express服务端用户登录' });
});
router.post('/login', function(req, res) {
    var sha1 = crypto.createHash('sha1');
    sha1.update(req.body.name);
    sha1.update(req.body.pwd);
    res.json({"status":0,"msg":"用户名："+req.body.name+" 密码："+req.body.pwd+"\nkey签名：\n"+sha1.digest('hex')});
});
module.exports = router;
