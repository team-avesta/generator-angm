(function() {
	'use strict';
	angular
		.module('collegeApp')
		.controller('CreateFacultyController', ['$state',
			'StateConstant',
			CreateFacultyController
		]);

	function CreateFacultyController($state, StateConstant) {
		var self = this;
		self.block_state = 'Block';
		self.isBlock = false;
		self.cancel = cancel;
		self.save = save;
		self.onBackBtn = onBackBtn;
		self.onBlockFaculty = onBlockFaculty;
		self.instructionFlag = false;
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
			id:'1',
			name:'Bachelor of Engineering'
		},
		{
			id:'2',
			name:'Master of Engineering'
		},
		{
			id:'3',
			name:'Master of Business Administration'
		}]

		self.facultyProgramData = 'Bachelor of Engineering'

		function onBackBtn() {
			$state.go(StateConstant.FACULTY_LIST);
		}

		function cancel() {
			$state.go(StateConstant.FACULTY_LIST);
		}

		function save() {
			$state.go(StateConstant.FACULTY_LIST);
		}
	}

})();
