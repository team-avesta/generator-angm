
/*Here Controller is kept for having working login of filter*/


(function() {
	'use strict';
	angular
		.module('universityApp')
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
		self.onCreateQP = onCreateQP;
		self.onFilterBtn = onFilterBtn;
		self.querySearchName = querySearchName;
		self.openMenu = openMenu;
		self.onClickQPStructure = onClickQPStructure;
		self.onClickQPCropping = onClickQPCropping;
		self.onClickSolutionCropping = onClickSolutionCropping;
		self.onClickAssessmentChart = onClickAssessmentChart;
		self.onClickSubmission = onClickSubmission;
		self.onClickQP = onClickQP;
		init();

		function init() {
			self.filterButtonText = 'VIEW FILTER';
		}

		function onClickQP() {
			$state.go(StateConstant.QP_BLOCK);
		}

		function onClickQPStructure() {
			$state.go(StateConstant.CREATE_QP);
		}

		function onClickQPCropping() {
			$state.go(StateConstant.CREATE_QPCROP);
		}

		function onClickSolutionCropping() {
			$state.go(StateConstant.CREATE_SOLUTIONCROP);
		}

		function onClickAssessmentChart() {
			$state.go(StateConstant.UPLOAD_ASSESSMENTCHART);
		}

		function openMenu($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

		function onClickSubmission(ev) {
			var confirm = $mdDialog.confirm()
				.title('Are you sure?')
				.textContent('All of the modules related to this subject will be submitted.')
				.ariaLabel('Lucky day')
				.targetEvent(ev)
				.ok('OK')
				.cancel('Cancel');

			$mdDialog.show(confirm).then(function() {
				self.status = '';
			}, function() {
				self.status = '';
			});
		}

		function onFilterBtn() {
			self.is_filter_open = !self.is_filter_open;
			self.filterButtonText = self.is_filter_open ? 'CLOSE FILTER' : 'VIEW FILTER';
		}

		function onCreateQP(eve, data) {
			$state.go(StateConstant.CREATE_QP);
		}

		function querySearchName(query) {
			var results = query ? self.subjectData.filter(createFilterForName(query)) : self.subjectData,
				deferred;
			if (self.simulateQuery) {
				deferred = $q.defer();
				$timeout(function() { deferred.resolve(results); }, Math.random() * 1000, false);
				return deferred.promise;
			} else {
				return results;
			}
		}

		function createFilterForName(query) {

			return function filterFn(state) {

				return (state.code.indexOf(query) === 0);

			};

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
