(function() {
	'use strict';

	angular.module('layouts')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.TWO_COLUMN, {
				url: '/twoColumn',
				templateUrl: 'app/modules/layouts/2columnInvite.html'
			})
			.state(stateConstantService.DIALOG, {
				url: '/dialog',
				templateUrl: 'app/modules/layouts/dialog.html',
				controller: 'dialogCtrl',
				controllerAs: 'vm'
			})
			.state(stateConstantService.GRID, {
				url: '/grid',
				templateUrl: 'app/modules/layouts/grid.html',
				controller: 'gridCtrl',
				controllerAs: 'vm'
			})
			.state(stateConstantService.FORM, {
				url: '/form',
				templateUrl: 'app/modules/layouts/form.html',
				controller: 'formCtrl',
				controllerAs: 'vm'
			})
			.state(stateConstantService.TAB, {
				url: '/tab',
				templateUrl: 'app/modules/layouts/tab.html'
			});
	}
})();
