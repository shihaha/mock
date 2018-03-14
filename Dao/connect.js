const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:12345/runoob";

// 连接数据库
exports.connect = function() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            let dbase = db.db("runoob");
            let collection = dbase.collection('site');
            resolve(collection);
        });
    });
};

// 模糊查询
exports.find = function(connection, query) {
    return connection.find(query);
};

// 单条插入
exports.insertOne = function(connection, info, callback) {
    return connection.insertOne(info, callback);
};