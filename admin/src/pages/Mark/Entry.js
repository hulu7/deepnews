import router from './Router.js';
import MarkService from './Service.js';

export default angular.module('Mark',[MarkService])
	.config(router)
	.name;
