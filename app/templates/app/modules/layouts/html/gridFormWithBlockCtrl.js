(function() {
	'use strict';
	angular
		.module('layouts')
		.controller('CreateFacultyController', ['$state',
			'StateConstant',
			CreateFacultyController
		]);

	function CreateFacultyController($state, StateConstant) {
		var self = this;
		self.block_state = 'Block';
		self.isBlock = false;
		self.instructionFlag = false;
		self.onBlockFaculty = onBlockFaculty;
		self.onHelpBtn = onHelpBtn;
		self.onCloseBtn = onCloseBtn;

		function onBlockFaculty(block) {
			if (block) {
				self.block_state = 'Unblock';
			} else {
				self.block_state = 'Block';
			}
		}


		function onHelpBtn() {
			console.log('click');
			self.instructionFlag = true;
		}

		function onCloseBtn() {
			console.log('click');
			self.instructionFlag = false;
		}

		self.programmeData = [{
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
