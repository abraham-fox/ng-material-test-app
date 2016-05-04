(function () {
    'use strict';

    angular
        .module('users')
        .controller('LoginFormController', [
            '$mdDialog', '$log', LoginFormController
        ]);

    function LoginFormController($mdDialog, $log) {
        var self = this;

        self.login = function () {
            $log.info('login');

            $mdDialog.hide({ name: 'aaa' });
        }

        self.cancel = function () {
            $log.info('login form cancel');
            $mdDialog.cancel();
        }
    }
})();