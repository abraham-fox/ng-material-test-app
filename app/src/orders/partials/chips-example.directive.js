(function () {
  'use strict';

  angular.module('testApp.Orders')
    .directive('chipsExample', ChipsExampleDirective);

  function ChipsExampleDirective() {
    return {
      templateUrl: 'src/orders/partials/chips-example.tmpl.html',
      bindToController: true,
      controller: ChipsExampleController,
      controllerAs: 'vm',
      restrict: 'E',
      scope: {
      }
    };
  }

  function ChipsExampleController() {
    var self = this;

    self.readonly = false;
    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.tags = [];
    self.vegObjs = [
      {
        'name': 'Broccoli',
        'type': 'Brassica'
      },
      {
        'name': 'Cabbage',
        'type': 'Brassica'
      },
      {
        'name': 'Carrot',
        'type': 'Umbelliferous'
      }
    ];
    self.newVeg = function (chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };
  }

})();