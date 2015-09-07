var express = require('express');
var crypto=require('crypto'); //加密模块
var sqlback=require('../database/conn');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: '用户登录',message:'Node.js+Express服务端用户登录' });
});
router.post('/login', function(req, res) {
    var status=-1,message="";
    var name=req.body.name;
    var pwd=req.body.pwd;
    var sha1 = crypto.createHash('md5');
    sha1.update(pwd);
    pwd=sha1.digest('hex');
    var _sql="SELECT * FROM wp_users WHERE user_login='"+name+"' and user_pass='"+pwd+"'";
    sqlback("SELECT * FROM wp_users",function(data){
        if(data.length>0){
            status=0;
            message="登录成功！";
        }
     //for(var i in data){
     //    console.log("----"+data[i].user_pass);
     // }
    });
    res.json({"status":status,"msg":message});
});
module.exports = router;
