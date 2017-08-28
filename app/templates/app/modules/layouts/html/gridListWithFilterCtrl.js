/*Here Controller is kept for having working login of filter*/

(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('gridFormWithFilterCtrl', controller);

	controller.$inject = [
		'$state',
		'StateConstant',
		'$mdDialog',
	];

	function controller($state, StateConstant, $mdDialog) {
		var vm = this;
		var originatorEv;
		vm.isBlock = false;
		vm.instructionFlag = false;
		//variables

		//core
		vm.filterButtonText;
		vm.onFilterBtn = onFilterBtn;

		////////////
		///start writing function implementations below


		////////////////////////////// USER ID //////////////////////////////////////


		init();

		function init() {
			vm.filterButtonText = 'VIEW FILTER';
		}

		/*function openMenu($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};*/

		function onFilterBtn() {
			vm.is_filter_open = !vm.is_filter_open;
			vm.filterButtonText = vm.is_filter_open ? 'CLOSE FILTER' : 'VIEW FILTER';
		}

		vm.qpData = [{
			subject_code: '211016',
			subject_name: 'Chemistry',
			qp_code: '1001',
			marks: '70',
			status: 'Completed'
		}, {
			subject_code: '211620',
			subject_name: 'Basic Electronics',
			qp_code: '1005',
			marks: '70',
			status: 'Pending'
		}, {
			subject_code: '213011',
			subject_name: 'Data Structures',
			qp_code: '2015',
			marks: '70',
			status: 'Rejected'
		}]

		vm.subjectData = [{
			code: '2110003',
			name: 'computer programming and utilization'
		}, {
			code: '2140702',
			name: 'operating system'
		}, {
			code: '2150703',
			name: 'analysis and design of algorithms'
		}]
	}

})();
