(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('gridFormWithBlockCtrl', controller);

	controller.$inject = [
		'$state',
		'StateConstant'
	];

	function controller($state, StateConstant) {
		var vm = this;
		vm.block_state = 'Block';
		vm.isBlock = false;
		vm.instructionFlag = false;
		//variables

		//core
		//var vm = this;

		vm.onBlockFaculty = onBlockFaculty;
		vm.onHelpBtn = onHelpBtn;
		vm.onCloseBtn = onCloseBtn;

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


		function onHelpBtn() {
			console.log('click');
			vm.instructionFlag = true;
		}

		function onCloseBtn() {
			console.log('click');
			vm.instructionFlag = false;
		}

		vm.programmeData = [{
				id: '1',
				name: 'Bachelor of Engineering'
			},
			{
				id: '2',
				name: 'Master of Engineering'
			},
			{
				id: '3',
				name: 'Master of Business Administration'
			}
		]
	}

})();
