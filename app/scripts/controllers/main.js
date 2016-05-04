'use strict';

/**
 * @ngdoc function
 * @name projReceiptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projReceiptApp
 */
angular.module('projReceiptApp').controller('MainCtrl', function ($scope, orchestratorService) {
  // REMOVE THIS COMMENTED OUT CODE ONCE YOU HAVE A REAL BACKEND API WORKING - THE API I'M USING IS /INCOMES, YOU CAN CHANGE IT IN ORCHESTRATOR-SERVICE.JS
  //orchestratorService.getIncome().then(function(items) {
  //  $scope.items = items;

    $('.ui.accordion').accordion();
    $scope.totalIncome = 0;
    $scope.items = [
      {
        name: 'Entertainment',
        percentage:'99',
        subItems:[
          {name: 'ITEM1-0', percentage:'5.25', subItems:[]},
          {name: 'ITEM1-1', percentage:'10', subItems:[]},
          {name: 'ITEM1-2', percentage:'4.75', 'subItems':[]}
        ]
      },
      {
        name: 'Travel',
        percentage: '10',
        subItems: [
          {name: 'ITEM3-0', percentage:'10', subItems:[]},
          {name: 'ITEM3-1', percentage:'12', subItems:[]}
        ]
      },
      {
        name: 'Merchandise',
        percentage: '35',
        subItems: [
          {name: 'ITEM3-0', percentage:'10', subItems:[]},
          {name: 'ITEM3-1', percentage:'12', subItems:[]}
        ]
      },
      {
        name: 'Services',
        percentage: '10',
        subItems: [
          {name: 'ITEM3-0', percentage:'10', subItems:[]},
          {name: 'ITEM3-1', percentage:'12', subItems:[]}
        ]
      },
      {
        name: 'Utilities',
        percentage: '5',
        subItems: [
          {name: 'ITEM3-0', percentage:'10', subItems:[]},
          {name: 'ITEM3-1', percentage:'12', subItems:[]}
        ]
      },
      {
        name: 'All other categories',
        percentage: '5',
        subItems: [
          {name: 'ITEM3-0', percentage:'10', subItems:[]},
          {name: 'ITEM3-1', percentage:'12', subItems:[]}
        ]
      }
    ];
    $scope.calculateIncome = function () {
      if ($scope.totalIncome) {
        for (var i = 0; i < $scope.items.length; ++i) {
          $scope.items[i].amount = $scope.totalIncome * ($scope.items[i].percentage / 100);
          if ($scope.items[i].hasOwnProperty('subItems')) {
            for (var j = 0; j < $scope.items[i].subItems.length; ++j) {
              $scope.items[i].subItems[j].amount = $scope.totalIncome * ($scope.items[i].subItems[j].percentage / 100);
            }
          }
        }
      }
    };

  // REMOVE THIS COMMENTED OUT CODE ONCE YOU HAVE A REAL BACKEND API WORKING - THE API I'M USING IS /INCOMES, YOU CAN CHANGE IT IN ORCHESTRATOR-SERVICE.JS
  //});
});
