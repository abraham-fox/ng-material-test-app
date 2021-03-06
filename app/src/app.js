(function () {
    angular
        .module('testApp', ['ngMaterial', 'ui.router', 'users', 'testApp.Orders', 'md.data.table', 'ngMessages'])
        .config(function ($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
            // Angular Material 
            $mdIconProvider
                .defaultIconSet('./assets/svg/avatars.svg', 128);

            $mdIconProvider.icon('share', './assets/svg/share.svg', 24);
            $mdIconProvider.icon('menu', './assets/svg/menu.svg', 24);
            $mdIconProvider.icon('favorite', './assets/svg/favorite.svg', 24);
            $mdIconProvider.icon('account', './assets/svg/account.svg', 24);
            $mdIconProvider.icon('dashboard', './assets/svg/dashboard.svg', 24);
            $mdIconProvider.icon('view-list', './assets/svg/view-list.svg', 24);
            $mdIconProvider.icon('filter-list', './assets/svg/filter-list.svg', 24);
            $mdIconProvider.icon('create', './assets/svg/create.svg', 24);

            $mdThemingProvider.theme('default')
                .primaryPalette('blue')
                .accentPalette('red');
            
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();

            // ui-router
            $urlRouterProvider.otherwise('/dashboard');

            $stateProvider
                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: 'src/dashboard/dashboard.html'
                })
                .state('userList', {
                    url: '/user-list',
                    templateUrl: 'src/users/users.html',
                    controller: 'UserController',
                    controllerAs: 'vm'
                })
                .state('creatUser', {
                    url: '/create-user',
                    templateUrl: 'src/users/create-user.html',
                    controller: 'CreateUserController',
                    controllerAs: 'vm'
                })
                .state('orderList', {
                    url: '/orders-list',
                    templateUrl: 'src/orders/list.html',
                    controller: 'OrderController',
                    controllerAs: 'vm'
                })
                .state('orderTable', {
                    url: '/orders-table',
                    templateUrl: 'src/orders/table.html',
                    controller: 'OrderController',
                    controllerAs: 'vm'
                })
                .state('orderCard', {
                    url: '/orders-card',
                    templateUrl: 'src/orders/card.html',
                    controller: 'OrderCardController',
                    controllerAs: 'vm'
                });
        })
})();