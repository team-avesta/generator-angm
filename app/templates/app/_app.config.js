(function () {
	'use strict';

	 angular // eslint-disable-line angular/component-limit
		.module('<%= slugifiedAppName %>')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		<% if (angularMaterial) { %>
		$urlRouterProvider
			.otherwise('/home');
		<% } else { %>
		$urlRouterProvider
			.otherwise('/');
		<% } %>
	}

	runBlock.$inject = [];

	function runBlock() {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();
