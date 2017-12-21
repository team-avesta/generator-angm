(function() {
	'use strict';

	angular
		.module('dashboard')
		.controller('sidenavCtrl', controller)

	controller.$inject = ['$mdSidenav', '$state', '$scope', 'stateConstantService'];

	function controller($mdSidenav, $state, $scope, stateConstantService) {
		var vm = this;

		vm.sidemenu = [{
				id: 1,
				name: 'Home',
				icon: 'home',
				is_accordian: false,
				sref: stateConstantService.HOME
			},
			{
				id: 2,
				name: 'Layouts',
				icon: 'apps',
				is_accordian: true,
				sub_menu: [{
						id: 21,
						name: '2 column',
						icon: 'art_track',
						sref: stateConstantService.TWO_COLUMN
					},
					{
						id: 22,
						name: 'Dialog',
						icon: 'aspect_ratio',
						sref: stateConstantService.DIALOG
					},
					{
						id: 23,
						name: 'Grid',
						icon: 'view_headline',
						sref: stateConstantService.GRID
					},
					{
						id: 24,
						name: 'Form',
						icon: 'assignment',
						sref: stateConstantService.FORM
					},
					{
						id: 25,
						name: 'Report Table',
						icon: 'view_week',
						sref: stateConstantService.REPORT_TABLE
					},
					{
						id: 26,
						name: 'Under Construction',
						icon: 'do_not_disturb',
						sref: stateConstantService.UNDER_CONSTRUCTION
					}
				]
			}

		];

		vm.toggleSidenav = function(menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.onSelectMenu = function(menu) {
			$state.go(menu.sref);
		};
	}
})();
