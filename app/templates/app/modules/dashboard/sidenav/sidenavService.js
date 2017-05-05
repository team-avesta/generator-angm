(function () {
	'use strict';

	angular
		.module('dashboard')
		.factory('MenuService', Menu);

	Menu.$inject = ['$http'];

	function Menu($http) {

		var menu = [{
			link: '.',
			name: 'This is a Placeholder menu. It disappears when the first module has been created.'
		}];

		return {
			listMenu: function () {
				return menu;
			}
		};

	}

})();
