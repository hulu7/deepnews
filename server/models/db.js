const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.createConnection("mongodb://127.0.0.1:27017/DeepNewsDatabase");

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',(callback)=>{
	//console.log('数据库连接成功');
});

module.exports = db;








