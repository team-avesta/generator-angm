(function () {
	'use strict';

	angular
		.module('dashboard')
		.controller('DashboardCtrl', controller);

	controller.$inject = ['dashboardService', 'stateConstantService', '$state'];

	function controller(dashboardService, stateConstantService, $state) {
		var vm = this;
		vm.title = "Hello, dashboard!";
		vm.version = "1.0.0";
		vm.listFeatures = dashboardService.getFeaturesList();
		vm.onLogout = onLogout;

		function onLogout() {
			$state.go(stateConstantService.LOGIN);
		}

	}

})();
