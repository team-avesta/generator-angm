(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('dialogCtrl', controller);

	controller.$inject = ['$mdDialog'];

	function controller($mdDialog) {
		var vm = this;
		vm.onDialog = onDialog;


		function onDialog(ev) {
			$mdDialog.show({
					controller: 'dialogFormCtrl',
					controllerAs: 'vm',
					templateUrl: 'app/modules/layouts/dialogForm.html',
					targetEvent: ev,
					clickOutsideToClose: true
				})
				.then(function(returnData) {
					console.log(returnData);
					if (returnData) {
						//vm.expense.push(returnData);
					}
				}, function() {
					console.log('here');
				});
		}
	}

})();
