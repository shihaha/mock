const MongoClient = require('mongodb').MongoClient;
const URL = "mongodb://127.0.0.1:12345/signup";

// 连接数据库
exports.connect = function(coll) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(URL, function(err, db) {
            if (err) throw err;
            let dbase = db.db("signup");
            let collection = dbase.collection(coll);
            resolve(collection);
        });
    });
};

// 单条插入
exports.insertOne = function(connection, info, callback) {
    return connection.insertOne(info, callback);
};

// 单条删除
exports.deleteOne = function(connection, whereStr, callback) {
    return connection.deleteOne(whereStr, callback);
};

// 单条修改
exports.updateOne = function(connection, whereStr, updateStr, callback) {
    return connection.updateOne(whereStr, updateStr, callback);
};

// 模糊查询
exports.find = function(connection, query) {
    return new Promise((resolve, reject) => {
        let res = connection.find(query);
        resolve(res);
    })
};