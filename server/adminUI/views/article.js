// 表单解析
var formParse = require('../../tools/formidableFormParse.js');

// 引用文章模型
var articleModel = require('../../models/article.js');

// 添加文章
exports.addArticle = function(req,res){

	// 解析前台用户发送的表单数据
	formParse.formidableFormParse(req,function(err,result){

		// 验证栏目名称是否填写
		if(!result.title){
			res.json({code:2,message:'请填写文章标题'});
			return;
		}


		// 添加文章
		articleModel.create(result,function(err,result){

			// 向前台发送 栏目添加是否成功的信息
			err ? res.json({code : 1,message:'文章添加失败'}) : res.json({code : 0,message : '文章添加成功'});

		})
		

	});

}

// 根据栏目ID获取文章列表
exports.getArticleListByID = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		cid = req.query.cid;

	articleModel.paginate({columnID:cid}, {page: page, limit: limit, sort:{published:-1},}, function(err, result) {

		err ? res.json({code:1,message:'文章列表获取失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});

	});

}

// 获取所有文章列表
exports.getArticleList = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		language = req.query.language,
		username = req.query.username;

	articleModel.paginate({subscribe:{$in:[username]}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {

		err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});

	});
}

// 获取所有文章列表
exports.getArticleListContinue = function(req,res) {

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		catalog = req.query.catalog;
	    limit = limit <= 10? limit: 10;

	    function map(category) {
	    	var m = {
				finance: '财经',
				politics: '党政',
				comic: '动漫',
				house: '房产',
				home: '家居',
				health: '健康',
				edu: '教育',
				military: '军事',
				tech: '科技',
				history: '历史',
				travel: '旅游',
				food: '美食',
				agriculture: '农业',
				car: '汽车',
				emotion: '情感',
				design: '设计',
				society: '社会',
				photography: '摄影',
				collect: '收藏',
				digital: '数码',
				sports: '体育',
				culture: '文化',
				game: '游戏',
				entertainment: '娱乐',
				baby: '育儿',
				IT: 'IT互联网',
				career: '职场',
				life: '养生',
				lottery: '彩票',
				pet: '宠物',
				fashion: '时尚',
				festival: '节日',
				funny: '幽默',
				psychology: '心理',
				story: '故事汇',
				wedding: '婚礼',
				Movie: '电影',
				TV: '电视',
				buddhism: '佛教',
				government: '政府',
				astrology: '星座'
			};
	    	return m[category];
		}

	if (catalog === "all") {
		articleModel.paginate({subscribe:{$in:['dn201900001']}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {
			result.docs.forEach(doc => {
				delete doc._doc.subscribe;
				delete doc._doc.add;
				delete doc._doc.trash;
			});
			err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});
		});
	} else {
		var test = map(catalog)
		articleModel.paginate({catalog:{$in:[test]}, subscribe:{$in:['dn201900001']}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {
			result.docs.forEach(doc => {
				delete doc._doc.subscribe;
				delete doc._doc.add;
				delete doc._doc.trash;
			});
			err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});
		});
	}
}

exports.searchArticles = function(req,res){
	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		limit = limit <= 10? limit: 10;
		key = req.query.key,
		language = req.query.language || 'ch',
		username = 'dn201900001';

	if(!key){

		res.json({code:2,message:'搜索关键字不能为空'});

		return;

	}

	var reg = new RegExp(key);

	articleModel.paginate({language:language,title:{$in:[reg]},subscribe:{$in:[username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){
		result.docs.forEach(doc => {
			delete doc._doc.subscribe;
			delete doc._doc.add;
			delete doc._doc.trash;
		});

		err ? res.json({code:1,message:'搜索文章列表失败'}) : res.json({code:0,message:'搜索文章列表获取成功',result:result});


	});
}

exports.getMarkedArticleList = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		language = req.query.language,
		username = req.query.username;

	articleModel.paginate({mark:{$in:[username]}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {

		err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});

	});

}

exports.getAddedArticleList = function(req,res){

    var page = Number(req.query.page) || 1,
        limit = Number(req.query.limit) || 10,
        language = req.query.language,
        username = req.query.username;

    articleModel.paginate({add:{$in:[username]}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {

        err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});

    });

}


exports.getTrashArticleList = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		language = req.query.language,
		username = req.query.username;

	articleModel.paginate({trash:{$in:[username]}}, {page: page, limit: limit, sort:{published:-1}}, function(err, result) {

		err ? res.json({code:1,message:'文章列表失败'}) : res.json({code:0,message:'文章列表获取成功',result:result});

	});

}

// 根据文章ID删除文章
exports.deleteByID = function(req,res){

	var id = req.query.id;

	if(!id){

		res.json({code:2,message:'文章ID不能为空'});

		return;
	}

	// 执行删除栏目操作
	articleModel.remove({_id:id},function(err){
			
		err ? res.json({code:2,message:'文章删除失败'}) : res.json({code:0,message:'文章删除成功'});
		
	});

}

// 根据文章ID获取指定文章信息
exports.getArticleByID = function(req,res){

	var id = req.query.id;

	if(!id){

		res.json({code:2,message:'文章ID不能为空'});

		return;
	}

	articleModel.find({_id:id},{},{},function(err,result){

		err ? res.json({code:2,message:'文章获取失败'}) : res.json({code:0,message:'文章获取成功',result:result[0]});

	});

}

// 根据文章ID修改指定文章信息
exports.modifyByID = function(req,res){

	var id = req.query.id;

	if(!id){

		res.json({code:2,message:'文章ID不能为空'});

		return;
	}

	formParse.formidableFormParse(req,function(err,result){

		// 验证文章名称是否填写
		if(!result.title){
			res.json({code:2,message:'请填写文章名称'});
			return;
		}

		// 修改栏目操作
		articleModel.update({_id:id},result,function(err,result){

			// 向前台发送 栏目添加是否成功的信息
			err ? res.json({code : 1,message:'操作失败'}) : res.json({code : 0,message : '操作成功'});

		});
		

	});

}

// 根据关键字搜索文章
exports.search = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		key = req.query.key,
		language = req.query.language || 'ch',
		username = req.query.username;

	if(!key){

		res.json({code:2,message:'搜索关键字不能为空'});

		return;

	}

	var reg = new RegExp(key);

	articleModel.paginate({language:language,title:{$in:[reg]},subscribe:{$in:[username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){

		err ? res.json({code:1,message:'搜索文章列表失败'}) : res.json({code:0,message:'搜索文章列表获取成功',result:result});


	});
}

// 过滤用户
exports.filterUser = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		key = req.query.key,
		language = req.query.language || 'ch',
		username = req.query.username;

	if(!username){

		res.json({code:2,message:'用户名不能为空'});

		return;

	}

	var reg_key = new RegExp(key);
	var reg_username = new RegExp(username);

	articleModel.paginate({language:language,title:{$in:[reg_key]},subscribe:{$in:[reg_username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){

		err ? res.json({code:1,message:'根据用户名过滤搜索文章列表失败'}) : res.json({code:0,message:'根据用户名过滤搜索文章列表获取成功',result:result});


	});

}

exports.searchMarked = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		key = req.query.key,
		language = req.query.language || 'ch',
		username = req.query.username;

	if(!key){

		res.json({code:2,message:'搜索关键字不能为空'});

		return;

	}

	var reg = new RegExp(key);

	articleModel.paginate({language:language,title:{$in:[reg]},subscribe:{$in:[username]},mark:{$in:[username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){

		err ? res.json({code:1,message:'搜索文章列表失败'}) : res.json({code:0,message:'搜索文章列表获取成功',result:result});


	});

}

exports.searchAdded = function(req,res){

    var page = Number(req.query.page) || 1,
        limit = Number(req.query.limit) || 10,
        key = req.query.key,
        language = req.query.language || 'ch',
        username = req.query.username;

    if(!key){

        res.json({code:2,message:'搜索关键字不能为空'});

        return;

    }

    var reg = new RegExp(key);

    articleModel.paginate({language:language,title:{$in:[reg]},subscribe:{$in:[username]},add:{$in:[username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){

        err ? res.json({code:1,message:'搜索文章列表失败'}) : res.json({code:0,message:'搜索文章列表获取成功',result:result});


    });

}

exports.searchTrash = function(req,res){

	var page = Number(req.query.page) || 1,
		limit = Number(req.query.limit) || 10,
		key = req.query.key,
		language = req.query.language || 'ch',
		username = req.query.username;

	if(!key){

		res.json({code:2,message:'搜索关键字不能为空'});

		return;

	}

	var reg = new RegExp(key);

	articleModel.paginate({language:language,title:{$in:[reg]},trash:{$in:[username]}},{page: page, limit: limit, sort:{published:-1}},function(err,result){

		err ? res.json({code:1,message:'搜索文章列表失败'}) : res.json({code:0,message:'搜索文章列表获取成功',result:result});


	});

}

// 获取文章总数
exports.getCount = function(req,res){

	var condition = req.query.condition;

	var language = req.query.language;

	if(condition){

		var reg = new RegExp(condition);

		condition = {title:{$in:[reg]},language:language};

	}else{

		condition = {language:language};

	}

	articleModel.count(condition,function(err,result){

		err ? res.json({code:1,message:'文章数量获取失败'}) : res.json({code:0,message:'文章数量获取成功',result:result});

	})

}

// 获取最新文档
exports.getLastedArticle = function(req,res){

	var limit = parseInt(req.query.limit) || 10,
		language = req.query.language;

	articleModel.find({language:language}).limit(limit).sort('-published').select('title published').exec(function(err,result){

		err ? res.json({code:1,message:'最新文档获取失败'}) : res.json({code:0,message:'最新文档获取成功',result:result});

	});

}
