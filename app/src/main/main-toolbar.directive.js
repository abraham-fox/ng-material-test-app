(function () {
	'use strict';

	angular.module('users')
		.directive('mainToolbar', MainToolbarDirective);

	MainToolbarDirective.$inject = ['$mdSidenav', '$mdDialog', '$mdToast'];
	function MainToolbarDirective() {
		return {
			templateUrl: 'src/main/main-toolbar.tmpl.html',
			bindToController: true,
			controller: MainToolbarController,
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
			}
		};
	}
	/* @ngInject */
	function MainToolbarController($mdSidenav, $mdDialog, $mdToast) {
		var self = this;

		self.loggedUser = null;

		self.languages = [
			{
				id: 1,
				name: 'English'
			},
			{
				id: 2,
				name: 'Norwegian'
			},
			{
				id: 3,
				name: 'Swedish'
			}
		];

		self.selectedLanguage = self.languages[0];

		self.showLoginForm = function (event) {
			$mdDialog.show({
				controller: ['$log', LoginFormController],
				controllerAs: 'vm',
				templateUrl: './src/login/login-form.html',
				parent: angular.element(document.body),
				targetEvent: event,
				clickOutsideToClose: false,
				fullscreen: false
			}).then(function (user) {
				self.loggedUser = user;

				var toast = $mdToast.simple();
				toast.position('top');
				toast.textContent('Logged as ' + user.email);

				$mdToast.show(toast);
			});

			function LoginFormController($log) {
				var self = this;

				self.user = {
					fullName: 'John Doe',
					email: 'John.Doe@test.com',
					password: '123'
				};

				self.login = function () {
					$log.info('login for', self.user);

					$mdDialog.hide(self.user);
				}

				self.cancel = function () {
					$log.info('login form cancel');
					$mdDialog.cancel();
				}
			}
		}

		self.toggleList = function () {
			$mdSidenav('mainSideNav').toggle();
		}
	}
})();