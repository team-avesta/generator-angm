
/*Here Controller is kept for having working login of filter*/


(function() {
	'use strict';
	angular
		.module('layouts')
		.controller('QPListController', [
			'$state',
			'StateConstant',
			'$mdDialog',
			QPListController
		]);

	function QPListController($state, StateConstant, $mdDialog) {
		var self = this;
		var originatorEv;
		self.filterButtonText;
		self.onFilterBtn = onFilterBtn;

		init();

		function init() {
			self.filterButtonText = 'VIEW FILTER';
		}

		/*function openMenu($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};*/

		function onFilterBtn() {
			self.is_filter_open = !self.is_filter_open;
			self.filterButtonText = self.is_filter_open ? 'CLOSE FILTER' : 'VIEW FILTER';
		}

		self.qpData = [{
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

		self.subjectData = [{
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
