import router from './Router.js';
import TrashService from './Service.js';

export default angular.module('Trash',[TrashService])
	.config(router)
	.name;
