var sqlMap = {
  // 用户
  user: {
    add: 'select * from user where name = ? AND pwd = ?'
  },
  // 食物
  food: {
    select: 'select * from food where type="new" limit 0,6',
    selectPop: 'select * from food where type="pop" limit 0,6'
  },
  quest: {
    select: 'select * from question limit 0,6'
  },
  search: {
    select: 'select * from search limit 0,10'
  }
}
module.exports = sqlMap
