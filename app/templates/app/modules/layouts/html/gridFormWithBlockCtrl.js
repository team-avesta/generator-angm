(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('gridFormWithBlockCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;
		vm.block_state = 'Block';
		vm.isBlock = false;
		vm.onBlockFaculty = onBlockFaculty;

		////////////
		///start writing function implementations below

		////////////////////////////// USER ID //////////////////////////////////////

		function onBlockFaculty(block) {
			if (block) {
				vm.block_state = 'Unblock';
			} else {
				vm.block_state = 'Block';
			}
		}
	}

})();
