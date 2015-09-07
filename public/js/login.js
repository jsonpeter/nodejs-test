//var crypto=require('crypto'); //加密模块
$(function(){
    $("#btn_login").click(function(){
        $.post("/login",{name:$("#username").val(),pwd:$("#userpwd").val()},function(data){
             if(data.status==0){
                 alert("登录成功！");
             }
        })
    })
});