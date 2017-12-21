(function() {
	'use strict';

	angular.module('otp')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.OTP, {
				url: '/otp',
				templateUrl: 'app/modules/otp/otp.html',
				controller: 'otpCtrl',
				controllerAs: 'vm'
			});
	}
})();
