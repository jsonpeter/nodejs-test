$(function(){
    $("#btn_login").click(function(){
        $.post("/login",{name:$("#username").val(),pwd:$("#userpwd").val()},function(data){
             alert(data.msg);
        })
    })
});