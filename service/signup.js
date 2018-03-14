let DB = require('../Dao/db.js');
let response = require('../model/response.js');

exports.submitSignupInfo = function(info) {
    return new Promise((resolve, reject) => {
        DB.connect().then(connection => {
            DB.insertOne(connection, info, function(err, result) {
                if (err) throw err;
                console.log('插入成功');
                response.data.status = 'insert success';
                resolve(response);
            })
        })
    })
};

exports.deleteSignupInfo = function(whereStr) {
    return new Promise((resolve, reject) => {
        DB.connect().then(connection => {
            DB.deleteOne(connection, whereStr, function(err, result) {
                if (err) throw err;
                console.log('删除成功');
                response.data.status = 'delete success';
                resolve(response);
            })
        })
    })
};

exports.updateSignupInfo = function(updateObj) {
    let whereStr = { name: '测试' };
    let updateStr = { $set: updateObj };
    return new Promise((resolve, reject) => {
        DB.connect().then(connection => {
            DB.updateOne(connection, whereStr, updateStr, function(err, result) {
                if (err) throw err;
                console.log('修改成功');
                response.data.status = 'update success';
                resolve(response);
            })
        })
    })
};

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