import router from './Router.js';
import IndexService from './Service.js';

export default angular.module('index_customer',[IndexService])
	.config(router)
	.name;































































