var sqlMap = {
    // 用户
    user: {
        add: 'select * from user where name = ? AND pwd = ?'
    }
}
module.exports = sqlMap;
