const userApi = require('./api/userApi')
const foodApi = require('./api/foodApis')
const questApi = require('./api/questApi')
const searchApi = require('./api/searchApi')
const direApi = require('./api/direApi')
// const fs = require('fs')
// const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 设置响应头
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'x-requested-with,content-type,Access-Control-Allow-Origin')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 注册api路由
app.use('/api/user', userApi)
app.use('/api/food', foodApi)
app.use('/api/quest', questApi)
app.use('/api/search', searchApi)
app.use('/api/dire', direApi)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
