(function () {
	'use strict';

	angular.module('users')
		.directive('mainSideNav', MainSideNavDirective);

	MainSideNavDirective.$inject = ['$mdSidenav', '$state'];
	
	function MainSideNavDirective() {
		return {
			templateUrl: 'src/main/main-side-nav.tmpl.html',
			bindToController: true,
			controller: MainSideNavController,
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
			}
		};
	}
	/* @ngInject */
	function MainSideNavController($mdSidenav, $state) {
		var self = this;


		self.menuItems = [
			{
				name: 'Dashboard',
				routerState: 'dashboard'
			},
			{
				name: 'User list',
				routerState: 'userList'
			}
		];

		self.isSelectedMenuItem = function (menuItem) {
			return $state.is(menuItem.routerState);
		};

		self.toggleList = function () {
			$mdSidenav('mainSideNav').toggle();
		}
	}

})();