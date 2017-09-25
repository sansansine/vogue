var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../db/sqlMap')

// 连接数据库
var conn = mysql.createConnection(models.mysql)

conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加新秀食物列表接口
router.post('/foodList', (req, res) => {
  var sql = $sql.food.select

  conn.query(sql, function (err, result) {
    console.log(result)
    if (err) {
      console.log('err')
      jsonWrite(res, false)
    } else {
      jsonWrite(res, result)
    }
  })
})
// 增加流行食物列表接口
router.post('/foodPopList', (req, res) => {
  var sql = $sql.food.selectPop

  conn.query(sql, function (err, result) {
    console.log(result)
    if (err) {
      console.log('err')
      jsonWrite(res, false)
    } else {
      jsonWrite(res, result)
    }
  })
})

module.exports = router
