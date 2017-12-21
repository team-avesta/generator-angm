(function() {
	'use strict';

	angular
		.module('layouts')
		.controller('reportTableCtrl', controller);

	controller.$inject = [];

	function controller() {
		var vm = this;
		vm.teamList = [{
				id: 1,
				code: '0001.001',
				name: 'Naresh Team'
			},
			{
				id: 2,
				code: '0002.001',
				name: 'Vivek Team'
			},
			{
				id: 3,
				code: '0003.001',
				name: 'Vinay Team'
			},
			{
				id: 4,
				code: '0003.002',
				name: 'Chirag Team'
			},
			{
				id: 5,
				code: '0003.003',
				name: 'Aakash Team'
			},
			{
				id: 6,
				code: '0004.001',
				name: 'Yash Team'
			},
			{
				id: 7,
				code: '0005.001',
				name: 'Rujul Team'
			},
			{
				id: 8,
				code: '0005.002',
				name: 'Aashish Team'
			},
			{
				id: 9,
				code: '0005.003',
				name: 'Rutu Team'
			},
			{
				id: 10,
				code: '0004.002',
				name: 'Gaurav Team'
			},
			{
				id: 1,
				code: '0001.001',
				name: 'Naresh Team'
			},
			{
				id: 2,
				code: '0002.001',
				name: 'Vivek Team'
			},
			{
				id: 3,
				code: '0003.001',
				name: 'Vinay Team'
			},
			{
				id: 4,
				code: '0003.002',
				name: 'Chirag Team'
			},
			{
				id: 5,
				code: '0003.003',
				name: 'Aakash Team'
			},
			{
				id: 6,
				code: '0004.001',
				name: 'Yash Team'
			},
			{
				id: 7,
				code: '0005.001',
				name: 'Rujul Team'
			},
			{
				id: 8,
				code: '0005.002',
				name: 'Aashish Team'
			},
			{
				id: 9,
				code: '0005.003',
				name: 'Rutu Team'
			},
			{
				id: 10,
				code: '0004.002',
				name: 'Gaurav Team'
			}
		];
	}

})();
