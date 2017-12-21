(function() {
	'use strict';

	angular.module('layouts')
		.config(route);

	route.$inject = ['$stateProvider', 'stateConstantService'];

	function route($stateProvider, stateConstantService) {

		$stateProvider
			.state(stateConstantService.TWO_COLUMN, {
				url: '/twoColumn',
				templateUrl: 'app/modules/layouts/2columnInvite.html',
				controller: '2columnInviteCtrl',
				controllerAs: 'vm'
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
			.state(stateConstantService.REPORT_TABLE, {
				url: '/report_table',
				templateUrl: 'app/modules/layouts/reportTable.html',
				controller: 'reportTableCtrl',
				controllerAs: 'vm'
			})
			.state(stateConstantService.UNDER_CONSTRUCTION, {
				url: '/under_construction',
				templateUrl: 'app/modules/layouts/underconstruction.html',
			});
	}
})();
