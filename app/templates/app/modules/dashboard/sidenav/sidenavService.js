(function () {
	'use strict';

	angular
		.module('dashboard')
		.factory('MenuService', service);

	service.$inject = [];

	function service() {

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
