(function() {
	'use strict';

	angular.module('forgotPassword')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.FORGOT_PASSWORD, {
				url: '/forgotPassword',
				templateUrl: 'app/modules/forgotPassword/forgotPassword.html',
				controller: 'forgotPasswordCtrl',
				controllerAs: 'vm'
			});
	}
})();
