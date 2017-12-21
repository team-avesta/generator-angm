(function() {
	'use strict';

	angular
		.module('login')
		.controller('loginCtrl', controller);

	controller.$inject = ['$state', 'stateConstantService'];

	function controller($state, stateConstantService) {
		var vm = this;
		vm.onClickRegisterBtn = onClickRegisterBtn;
		vm.onClickLoginBtn = onClickLoginBtn;
		vm.onForgotPassword = onForgotPassword;
		//variables

		//core

		//helpers

		////////////
		///start writing function implementations below
		function onClickRegisterBtn(){

			$state.go(stateConstantService.REGISTRATION);
		}

		function onClickLoginBtn() {
			$state.go(stateConstantService.OTP);
		}

		function onForgotPassword() {
			$state.go(stateConstantService.FORGOT_PASSWORD);
		}


	}


})();
