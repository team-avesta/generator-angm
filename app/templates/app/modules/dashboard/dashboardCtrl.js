(function () {
	'use strict';

	angular
		.module('dashboard')
		.controller('DashboardCtrl', controller);

	controller.$inject = ['dashboardService'];

	function controller(dashboardService) {
		var vm = this;
		vm.title = "Hello, dashboard!";
		vm.version = "1.0.0";
		vm.listFeatures = dashboardService.getFeaturesList();

	}

})();
