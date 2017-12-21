(function() {
	'use strict';

	angular.module('login')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.LOGIN, {
				url: '/login',
				templateUrl: 'app/modules/login/login.html',
				controller: 'loginCtrl',
				controllerAs: 'vm'
			});
	}
})();
