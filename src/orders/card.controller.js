(function () {
    'use strict';

    angular
        .module('testApp.Orders')
        .controller('OrderCardController', [
            OrderCardController
        ]);

    function OrderCardController() {
        var vm = this;

        vm.selectedItem = {};

        vm.selectItem = function (item) {
            vm.selectedItem = item;
        }

        vm.onPartialLoad = function(){
        }

        vm.items = [
            {
                id: 1,
                caption: 'Simple card',
                text: 'The <md-card> directive is a container element used within <md-content> containers.',
                partialSrc: 'src/orders/partials/simple-card.html'
            },
            {
                id: 2,
                caption: 'md-checkbox example',
                text: 'The checkbox directive is used like the normal angular checkbox. \r\nAs per the material design spec the checkbox is in the accent color by default.\nThe primary color palette may be used with the md-primary class.',
                partialSrc: 'src/orders/partials/checkbox-example.html'
            },
            {
                id: 3,
                caption: 'md-chips example',
                text: '<md-chip> is a component used within <md-chips> and is responsible for rendering individual chips.',
                partialSrc: 'src/orders/partials/chips-example.html'
            },
            {
                id: 4,
                caption: 'Input form',
                text: 'Help text..',
                partialSrc: 'src/orders/partials/input-form.html'
            },
            {
                id: 5,
                caption: 'Buttons!',
                text: 'Just buttons',
                partialSrc: 'src/orders/partials/buttons.html'
            }
        ]
    };
})();