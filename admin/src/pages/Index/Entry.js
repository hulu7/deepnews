import router from './Router.js';
import IndexService from './Service.js';

export default angular.module('index',[IndexService])
	.config(router)
	.name;
