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
				name: 'Masters',
				icon: 'dns',
				is_accordian: true,
				sub_menu: [{
						id: 21,
						name: 'Project',
						icon: 'add_to_queue',
						sref: stateConstantService.PROJECT_LIST
					},
					/*{
						id: 22,
						name: 'Project Site',
						icon: 'location_city',
						sref: stateConstantService.PROJECT_SITE_LIST
					},*/
					{
						id: 23,
						name: 'Employee',
						icon: 'person',
						sref: stateConstantService.EMPLOYEE_LIST
					},
					{
						id: 24,
						name: 'Project Team',
						icon: 'group_add',
						sref: stateConstantService.PROJECT_TEAM
					}

					/*{
						id: 26,
						name: 'Purchase Type',
						icon: 'storage',
						sref: stateConstantService.ITEM_TYPE_LIST
					},*/
				]
			},
			{
				id: 3,
				name: 'Expenses',
				icon: 'account_balance_wallet',
				is_accordian: true,
				sub_menu: [{
						id: 31,
						name: 'Expense List',
						icon: 'local_atm',
						sref: stateConstantService.EXPENSE_CATEGORY_LIST
					},
					{
						id: 32,
						name: 'Budget',
						icon: 'account_balance_wallet',
						sref: stateConstantService.BUDGET_LIST,
					},
					{
						id: 33,
						name: 'Add Expense',
						icon: 'local_atm',
						sref: stateConstantService.ADD_EXPENSE_LIST
					}
				]
			},
			{
				id: 4,
				name: 'Purchase',
				icon: 'local_grocery_store',
				is_accordian: true,
				sub_menu: [{
						id: 41,
						name: 'Item List',
						icon: 'local_grocery_store',
						sref: stateConstantService.ITEM_CATEGORY_LIST
					},
					{
						id: 42,
						name: 'Add Purchase',
						icon: 'local_grocery_store',
						sref: stateConstantService.ADD_PURCHASE_LIST
					}
				]
			},
			{
				id: 5,
				name: 'Payment',
				icon: 'payment',
				is_accordian: true,
				sub_menu: [{
						id: 51,
						name: 'Advance Payment',
						icon: 'payment',
						is_accordian: false,
						sref: stateConstantService.PAYMENT_LIST
					},
					{
						id: 52,
						name: 'Funds Transfer',
						icon: 'swap_horiz',
						is_accordian: false,
						sref: stateConstantService.FUND_TRANSFER_LIST
					},
					{
						id: 53,
						name: 'Approval',
						icon: 'done_all',
						is_accordian: false,
						sref: stateConstantService.APPROVAL_LIST
					},
					{
						id: 54,
						name: 'Reimbursement',
						icon: 'done_all',
						is_accordian: false,
						sref: stateConstantService.REIMBURSEMENT_LIST
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
