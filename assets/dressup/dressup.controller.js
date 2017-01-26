(function () {
  'use strict';

  angular
    .module('nikki.dressup')
    .controller('DressupController', DressupController);

  DressupController.$inject = ['$scope', '$rootScope'];
  function DressupController($scope, $rootScope) {
    console.log(1234);
    $scope.a=1000;
  }
})();
