import router from './Router.js';
import AddService from './Service.js';

export default angular.module('Add',[AddService])
	.config(router)
	.name;
