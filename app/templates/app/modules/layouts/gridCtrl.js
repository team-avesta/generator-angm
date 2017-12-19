(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('gridCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;
		vm.block_state = 'Block';
		vm.isBlock = false;
		vm.onBlockFaculty = onBlockFaculty;

		vm.filterButtonText;
		vm.onFilterBtn = onFilterBtn;
		////////////
		///start writing function implementations below

		////////////////////////////// USER ID //////////////////////////////////////
		vm.itemList = [
			{ "id": 1, "code": "1200", "name": "Plastic Bags" },
			{ "id": 2, "code": "1211", "name": "Note Books" },
			{ "id": 3, "code": "1222", "name": "Stapler Pins" }
		];

		init();

		function init() {
			vm.filterButtonText = 'VIEW FILTER';
		}

		function onFilterBtn() {
			vm.is_filter_open = !vm.is_filter_open;
			vm.filterButtonText = vm.is_filter_open ? 'CLOSE FILTER' : 'VIEW FILTER';
		}

		function onBlockFaculty(block) {
			if (block) {
				vm.block_state = 'Unblock';
			} else {
				vm.block_state = 'Block';
			}
		}
	}

})();
