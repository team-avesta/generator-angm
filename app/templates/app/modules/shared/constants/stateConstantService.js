(function() {
	'use strict';

	var states = {
		HOME: 'dashboard.home',
		LOGIN : 'login',
		FORGOT_PASSWORD: 'forgot_password'
	};

	angular.module('shared').constant('stateConstantService', states);

})();
