//init this service in app.js
(function() {
	'use strict';
	angular.module('shared')
		.factory('arrayService', service);

	function service() {
		var service = {
			findAndUpdate: findAndUpdate,
			deleteItem: deleteItem,
			findIndex: findIndex,
			findRecord: findRecord
		};

		return service;

		function findAndUpdate(array, record) {
			var foundIndex = service.findIndex(array, 'id', record.id);
			if (foundIndex !== -1) {
				array[foundIndex] = record;
			}

		}

		function findIndex(array, property, value) {
			var found = array.findIndex(function(item) {
				return item[property] === value;
			});
			return found;
		}

		function findRecord(array, property, value) {
			var found = array.find(function(item) {
				return item[property] === value;
			});
			return found;
		}

		function deleteItem(array, property, value) {
			var foundIndex = service.findIndex(array, property, value);
			if (foundIndex !== -1) {
				array.splice(foundIndex, 1);
			}
		}
	}
})();
