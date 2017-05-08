(function() {
	'use strict';

  	angular
		.module('<%= nameApp %>')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			return {};

		}

})();
