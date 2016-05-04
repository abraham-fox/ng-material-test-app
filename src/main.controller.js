(function () {
    'use strict';

    angular
        .module('users')
        .controller('MainController', [
            '$log', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$mdToast', '$state',
            MainController
        ]);

    function MainController($log, $mdBottomSheet, $mdSidenav, $mdDialog, $mdToast, $state) {
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
                console.log(toast);
                toast.textContent('Logged as ' + user.email);
                $mdToast.show(toast);
            });

            function LoginFormController($log) {
                var self = this;

                self.user = {
                    fullName: 'John Dow',
                    email: 'user@test.com',
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