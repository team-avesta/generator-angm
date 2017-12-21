(function() {
	'use strict';

	angular
		.module('registration')
		.controller('registrationCtrl', controller);

	controller.$inject = [
		'$state',
		'stateConstantService',
	];

	function controller($state, stateConstantService) {
		var vm = this;

		vm.createPasswordSuccess = createPasswordSuccess;
		vm.onCancel = onCancel;

		function createPasswordSuccess() {
			$state.go(stateConstantService.LOGIN);
		}

		function onCancel() {
			$state.go(stateConstantService.LOGIN);
		}
	}
})();
