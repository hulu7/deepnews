export default angular.module('TrashService',[])
	.factory('TrashSer',['$http','CommonJs',($http,CommonJs)=>{

		let SERVER_PATH = CommonJs.SERVER_PATH;

		return {

			// 获取栏目信息
			getAllColumn(Token,currentLanguage){

				return $http({
					method:'get',
					url:`${SERVER_PATH}column/getAllColumn`,
					params:{ Token,currentLanguage }
				});

			},
			// 获取所有文章列表
			getTrashArticleList(params){

				// 发送请求
				return $http({
					method:'get',
					url : `${SERVER_PATH}articles/getTrashArticleList`,
					params:params
				});

			},
			// 根据ID删除文章
			recoveryByID(id,Token){

				// 发送请求
				return $http({
					method:'get',
					url : `${SERVER_PATH}articles/recoveryByID`,
					params:{ id,Token }
				});

			},
			// 根据ID获取指定文章信息
			getArticleByID(id,Token){

				// 发送请求
				return $http({
					method:'get',
					url : `${SERVER_PATH}articles/getArticleByID`,
					params:{ id,Token }
				});

			},
			// 根据ID修改文章信息
			modifyByID(formData,id,Token){

				// 发送请求
				return $http({
					method:'post',
					url : `${SERVER_PATH}articles/modifyByID`,
					data:formData,
					params : { id,Token }
				});

			},
			// 根据关键字搜索文章
			searchTrash(params){

				return $http({
					method:'get',
					url:`${SERVER_PATH}articles/searchTrash`,
					params:params
				});

			},
			// 获取文章总数
			getCount(params){

				return $http({
					method:'get',
					url:`${SERVER_PATH}articles/getCoun`,
					params:params
				});

			},
			// 根据栏目ID获取栏目模型
			getModelByCID(Token,id){

				return $http({
					method:'get',
					url:`${SERVER_PATH}column/getModelByCID`,
					params : { Token,id }
				});

			}

		}

	}])
	.name;
