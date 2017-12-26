var express = require('express')
var router = express.Router()
var Data = require('../../src/json/directory.json')

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

// 增加省会城市列表接口
router.post('/provinceList', (req, res) => {
  jsonWrite(res, Data)
})

// 增加市级城市列表接口
router.post('/cityList', (req, res) => {
  let params = req.body
  let result = '[]'
  for (let item in Data) {
    if (Data[item].name === params.province) {
      result = Data[item].city
    }
  }
  jsonWrite(res, result)
})

// 增加区级城市列表接口
router.post('/countyList', (req, res) => {
  let params = req.body
  let result = '[]'
  for (let item in Data) {
    if (Data[item].name === params.province) {
      for (let index in Data[item].city) {
        if (Data[item].city[index].name === params.city) {
          result = Data[item].city[index].area
        }
      }
    }
  }
  jsonWrite(res, result)
})

module.exports = router
