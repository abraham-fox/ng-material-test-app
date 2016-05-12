(function () {
	'use strict';

	angular
		.module('users')
		.controller('CreateUserController', CreateUserController);

	CreateUserController.$inject = ['$timeout'];

	function CreateUserController(timeout) {
		var vm = this;
		vm.project = {
			description: 'Nuclear Missile Defense System',
			rate: 500
		};

	}
})();