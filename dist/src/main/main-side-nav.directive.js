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

		var menuData = [
			{
				name: 'Dashboard',
				routerState: 'dashboard',
				icon: 'dashboard'
			},
			{
				name: 'User list',
				routerState: 'userList',
				icon: 'view-list'
			}
		]

		self.keyword = '';

		self.menuItems = menuData;

		self.isSelectedMenuItem = function (menuItem) {
			return $state.is(menuItem.routerState);
		};

		self.toggleList = function (event) {
			if (event.target.tagName === 'INPUT') return;

			$mdSidenav('mainSideNav').toggle();
		};
	}

})();