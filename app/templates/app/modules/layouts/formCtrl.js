(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('formCtrl', controller);

	controller.$inject = ['$timeout', '$state', 'stateConstantService'];

	function controller($timeout, $state, stateConstantService) {
		var vm = this;
		vm.block_state = 'Block';
		vm.isBlock = false;
		vm.instructionFlag = false;
		vm.onBlockEmployee = onBlockEmployee;
		vm.onInstruction = onInstruction;
		vm.onClose = onClose;
		vm.currDate = new Date();

		////////////
		///start writing function implementations below

		////////////////////////////// USER ID //////////////////////////////////////

		function onInstruction() {
			vm.instructionFlag = true;
		}

		function onClose() {
			vm.instructionFlag = false;
		}

		function onBlockEmployee(block) {
			if (block) {
				vm.block_state = 'Unblock';
			} else {
				vm.block_state = 'Block';
			}
		}

		vm.paymentType = [
			{ "id": 1, "name": "Advances" },
			{ "id": 2, "name": "Reimbursement" }
		];

		vm.project = [
			{ "id": 1, "code": "bhu001", "name": "Bhuvneshwar Board" },
			{ "id": 2, "code": "aas002", "name": "Aasam Board" },
			{ "id": 3, "code": "swas003", "name": "Swarnim Gujarat Sports University" },
		];

		vm.employeeList = [{
			code: '001',
			name: 'Yusuf Sharma'
		}, {
			code: '002',
			name: 'Vivek Satasiya'
		}, {
			code: '003',
			name: 'Yash Vekaria'
		},
		{
			code: '004',
			name: 'Naresh Tank'
		},
		{
			code: '005',
			name: 'Vinay Bhinde'
		}]

		//variables

		vm.querySearchName = querySearchName;



		//core

		//helpers

		////////////
		///start writing function implementations below
		function onBackBtn() {
			$state.go(stateConstantService.HOME);
		}

		function onCancelBtn() {
			$state.go(stateConstantService.HOME);
		}

		function onSaveBtn() {
			$state.go(stateConstantService.HOME);
		}

		function querySearchName(query) {
			var results;
			results = query ? vm.employeeList.filter(createFilterForName(query)) : vm.employeeList;
			if (vm.simulateQuery) {
				//deferred = $q.defer();
				//$timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
				//return deferred.promise;
				return $q(function(resolve, reject) {
					$timeout(function() {
						resolve(results);
					}, Math.random() * 1000, false);
				})
			} else {
				return results;
			}
		}

		function createFilterForName(query) {
			var lowercaseQuery;
			//lowercaseQuery = angular.lowercase(query);
			return function filterFn(state) {
				//if(state){
				return state.name.indexOf(query) === 0;
				//} else {
				//          return (state.code.indexOf(query) === 0);
				//}

			};
		}
	}

})();
