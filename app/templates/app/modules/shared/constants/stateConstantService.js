(function() {
	'use strict';

	var states = {
		HOME: 'dashboard.home',
		LOGIN: 'login',
		OTP: 'otp',
		REGISTRATION: 'registration',
		FORGOT_PASSWORD: 'forgot_password',
		TWO_COLUMN: 'dashboard.two_column',
		DIALOG: 'dashboard.dialog',
		GRID: 'dashboard.grid',
		FORM: 'dashboard.form',
		UNDER_CONSTRUCTION: 'dashboard.under_construction',
		REPORT_TABLE: 'dashboard.report_table'
	};

	angular.module('shared').constant('stateConstantService', states);

})();
