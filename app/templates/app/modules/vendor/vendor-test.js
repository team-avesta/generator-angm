(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:vendorTest
	 * @description
	 * # vendorTest
	 * Test of the app
	 */

	describe('vendor test', function () {
		var controller = null;
		var $scope = null;

		beforeEach(function () {
			module('shree-scan');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('VendorCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
