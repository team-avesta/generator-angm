(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('2columnInviteCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;
		////////////
		///start writing function implementations below

		////////////////////////////// USER ID //////////////////////////////////////
		vm.itemList = [
			{ "id": 1, "code": "1200", "name": "Plastic Bags" },
			{ "id": 2, "code": "1211", "name": "Note Books" },
			{ "id": 3, "code": "1222", "name": "Stapler Pins" }
		];

	}

})();
