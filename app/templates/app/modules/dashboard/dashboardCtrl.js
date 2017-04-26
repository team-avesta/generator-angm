(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:DashboardCtrl
	* @description
	* # DashboardCtrl
	* Controller of the app
	*/

	angular
		.module('<%= slugifiedAppName %>')
		.controller('DashboardCtrl', Home);

	Home.$inject = ['dashboardService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(dashboardService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, <%= slugifiedAppName %>!";
		vm.version = "1.0.0";
		vm.listFeatures = dashboardService.getFeaturesList();

	}

})();
