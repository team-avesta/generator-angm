(function() {
	'use strict';

	angular
		.module('forgotPassword')
		.controller('forgotPasswordCtrl', controller);

	controller.$inject = ['$state', 'stateConstantService'];

	function controller($state, stateConstantService) {
		var vm = this;

		//variables
		vm.onDone = onDone
		vm.onResetPassword = onResetPassword
		//core

		//helpers

		////////////
		///start writing function implementations below

		function onDone() {
			$state.go(stateConstantService.LOGIN);
		}

		function onResetPassword() {
			$state.go(stateConstantService.LOGIN);
		}
	}

})();
