(function () {
    angular
        .module('testApp', ['ngMaterial', 'ui.router', 'users'])
        .config(function ($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
            // Angular Material 
            $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 128);

            $mdIconProvider.icon('share', './assets/svg/share.svg', 24);
            $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
            $mdIconProvider.icon('favorite', './assets/svg/favorite.svg', 24);
            $mdIconProvider.icon('account', './assets/svg/account.svg', 24);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');

            // ui-router

            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('userList', {
                    url: '/user-list',
                    templateUrl: 'src/users/users.html',
                    controller: 'UserController',
                    controllerAs: 'vm'
                })
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'src/dashboard/dashboard.html'
                })
                .state('state2.list', {
                    url: '/list',
                    templateUrl: 'src/app/state2.list.html',
                    controller: function ($scope) {
                        $scope.things = ['A', 'Set', 'Of', 'Things'];
                    }
                });
        })
})();