/*Here Controller is kept for having working login of filter*/

(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('gridFormWithFilterCtrl', controller);

	controller.$inject = [
	];

	function controller() {
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

		function onFilterBtn() {
			vm.is_filter_open = !vm.is_filter_open;
			vm.filterButtonText = vm.is_filter_open ? 'CLOSE FILTER' : 'VIEW FILTER';
		}
	}

})();
