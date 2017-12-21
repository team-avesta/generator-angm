(function() {
	'use strict';

	angular
		.module('notification')
		.controller('notificationCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;

		//variables
		vm.notification = [{
				id: 1,
				priority_type: 1,
				statement: 'Subject Assessment of Chemistry subject is pending.',
				publish_at:'4 hours ago'
			},
			{
				id: 2,
				priority_type: 2,
				statement: 'QP Management of Physics subject is completed.',
				publish_at:'Yesterday at 4.54pm'
			}, {
				id: 3,
				priority_type: 1,
				statement: 'Subject Assessment of Physics subject is on hold.',
				publish_at:'August 6 at 1.52pm'
			}, {
				id: 4,
				priority_type: 2,
				statement: 'Paper Assessment of Maths-II subject will be start from 16/08/2017',
				publish_at:'July 28 at 10.16am'
			}
		];

		//core

		//helpers

		////////////
		///start writing function implementations below
	}

})();
