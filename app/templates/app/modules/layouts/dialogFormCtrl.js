(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('dialogFormCtrl', controller);

	controller.$inject = ['$mdDialog'];


	function controller($mdDialog) {

		var vm = this;
		vm.onCancel = onCancel;
		vm.onSave = onSave;
		vm.onClose = onClose;

		function onClose() {
			$mdDialog.hide()
		}


		function onCancel() {
			$mdDialog.hide()
		}

		function onSave() {
			$mdDialog.hide()
		}

	}

})();
