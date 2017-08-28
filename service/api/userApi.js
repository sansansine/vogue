var models = require('../db/db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../db/sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    var success = false;
    conn.query(sql, [params.name, params.pwd], function(err, result) {
      console.log(result);
        if (err) {
          console.log('err');
        }else if (result.length<=0) {
          success = false;
          console.log('fail');
        }else {
          success = true;
        }
        jsonWrite(res, success);

    })
});
// 增加用户接口
router.get('/addUser', (req, res) => {
     res.send('retrunJson');
});

module.exports = router;