let DB = require('../Dao/connect.js');
let response = require('../model/response.js');

exports.getCounterpartyList = function(req) {
    return new Promise((resolve, reject) => {
        // 模糊查询条件开始
        let reg = new RegExp(req.query.coreName);
        let query = {};
        query.name = reg;
        // 模糊查询条件结束
        DB.connect().then(connection => { // 连接数据库
            DB.find(connection, query).toArray(function(err, result) { // 模糊查询
                response.data.datalist = [];
                for (let i = 0; i < result.length; i++) {
                    let item = {};
                    item.name = result[i].name;
                    item.number = result[i].number;
                    response.data.datalist.push(item);
                }
                response.data.pagecond = {
                    page: 1,
                    count: 1,
                    pageSize: 5,
                    totalPages: 1
                };
                resolve(response);
            });
        })
    })
};

exports.submitSignupInfo = function(info) {
    return new Promise((resolve, reject) => {
        DB.connect().then(connection => {
            DB.insertOne(connection, info, function(err, result) {
                if (err) throw err;
                console.log('插入成功');
                response.data.status = 'success';
                resolve(response);
            })
        })
    })
};