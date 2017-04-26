(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.test:dashboardTest
	* @description
	* # dashboardTest
	* Test of the app
	*/

	describe('dashboardCtrl', function () {
		var controller = null, $scope = null, $location;

		beforeEach(function () {
			module('<%= slugifiedAppName %>');
		});

		beforeEach(inject(function ($controller, $rootScope, _$location_) {
			$scope = $rootScope.$new();
			$location = _$location_;

			controller = $controller('DashboardCtrl', {
				$scope: $scope
			});
		}));

		it('Should DashboardCtrl must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should match the path Module name', function () {
			$location.path('/dashboard');
			expect($location.path()).toBe('/dashboard');
		});

	});
})();
