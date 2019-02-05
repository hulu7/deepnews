import template from './Template.jade';
import controller from './Controller.js';

export default function router($stateProvider){

	$stateProvider.state('major.trash',{
		url : '/trash',
		views : {
			'multiple' : {
				template : template,
				controller : controller
			}
		}
	});

}

router.$inject = ['$stateProvider'];



















