(function() {
	'use strict';

	angular.module('registration')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.REGISTRATION, {
				url: '/registration',
				params: {
					type: 'registration'
				},
				templateUrl: 'app/modules/registration/registration.html',
				controller: 'registrationCtrl',
				controllerAs: 'vm'
			});


	}
})();
