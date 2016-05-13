(function () {
    'use strict';

    angular
        .module('testApp.Orders')
        .controller('OrderController', [
            '$http', '$scope',
            OrderController
        ]);

    function OrderController($http, $scope) {
        var self = this;

        self.selectedDate = new Date();
        self.data = [];

        $http.get('random-data.json').then(function successCallbac(response) {
            self.data = response.data.slice(0, 5);
        });

        $scope.selected = [];

        $scope.query = {
            order: 'name',
            limit: 5,
            page: 1
        };

        function success(response) {
            $scope.desserts = response.data;
        }

        $scope.getDesserts = function () {
            $scope.promise = $http.get('desserts.json').then(success);//.$promise;
        };
        $scope.getDesserts();

        // self.getDesserts = function () {
        //     self.promise = $http.get('desserts.json').then(function successCallbac(response) {
        //         self.data = response.data.data;
        //     })
        // };


        // self.getDesserts();
    }
})();