(function() {
	'use strict';

	angular
		.module('otp')
		.controller('otpCtrl', controller);

	controller.$inject = [
		'$state',
		'stateConstantService'
	];

	function controller($state, stateConstantService) {
		var vm = this;
		//variables

		//core

		vm.onVerifyOTP = onVerifyOTP;

		///start writing function implementations below





		function onVerifyOTP() {
			$state.go(stateConstantService.HOME);
		}
	}

})();
