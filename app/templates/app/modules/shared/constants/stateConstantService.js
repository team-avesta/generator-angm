(function() {
	'use strict';

	var states = {
		HOME: 'dashboard.home',
		LOGIN: 'login',
		FORGOT_PASSWORD: 'forgot_password',
		TWO_COLUMN: 'dashboard.two_column',
		DIALOG: 'dashboard.dialog',
		GRID: 'dashboard.grid',
		FORM: 'dashboard.form',
		TAB: 'dashboard.tab'
	};

	angular.module('shared').constant('stateConstantService', states);

})();
