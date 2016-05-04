'use strict';

/**
 * @ngdoc service
 * @name projReceiptApp.orchestratorService
 * @description
 * # orchestratorService
 * Factory in the rainierApp.
 */
angular.module('projReceiptApp')
  .factory('orchestratorService', function (Restangular) {
    var service = {
      getIncome: function() {
        return Restangular.one('incomes').get().then(function (result) {
          return result;
        });
      }
    };
    return service;
  });
