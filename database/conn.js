var mysql = require('mysql');
//创建连接
var client = mysql.createConnection({
    user: 'root',
    database:'wordpress',
    password: '123qwe',
    port:3306
});
function handleError (err) {
    if (err) {
        // 如果是连接断开，自动重新连接
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            connect();
        } else {
            console.error(err.stack || err);
        }
    }
}
client.connect(handleError);

function sqlback(sql,fn){
    client.query(sql, function(err, rows, fields) {
        if (err) throw err;
        fn(rows);
    });
}
module.exports=sqlback;
