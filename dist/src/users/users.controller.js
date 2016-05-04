(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserController', [
            'userService', '$timeout', '$log', '$mdBottomSheet', '$mdSidenav', '$mdDialog', '$mdToast',
            UserController
        ]);

    function UserController(userService, $timeout, $log, $mdBottomSheet, $mdSidenav, $mdDialog, $mdToast) {
        var self = this;
        self.users = [];
        self.selectedUser = null;

        userService.loadAllUsers().then(function success(users) {
            self.users = users;
            self.selectedUser = users[0];
        });

        self.selectUser = function (user) {
            self.selectedUser = user;
        };

        // self.toggleList = function () {
        //     $mdSidenav('userList').toggle();
        // }

        /**
         * Show the bottom sheet
         */
        self.makeContact = function (selectedUser) {
            $mdBottomSheet.show({
                controllerAs: "vm",
                controller: ['$mdBottomSheet', ContactSheetController],
                templateUrl: './src/users/contact-sheet.html',
                parent: angular.element(document.getElementById('content'))
            });

            function ContactSheetController($mdBottomSheet) {
                this.user = selectedUser;
                this.items = [
                    { name: 'Phone', icon: 'phone', icon_url: 'assets/svg/phone.svg' },
                    { name: 'Twitter', icon: 'twitter', icon_url: 'assets/svg/twitter.svg' },
                    { name: 'Google+', icon: 'google_plus', icon_url: 'assets/svg/google_plus.svg' },
                    { name: 'Hangout', icon: 'hangouts', icon_url: 'assets/svg/hangouts.svg' }
                ];
                this.contactUser = function (action) {
                    $log.info('Contact by', action.name);
                    $mdBottomSheet.hide(action);
                };
            }
        }
    }
})();