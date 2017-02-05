(function () {
  'use strict';

  angular
    .module('nikki.dressup')
    .controller('DressupController', DressupController);
  DressupController.$inject = ['$scope', '$rootScope','DressupService'];
  function DressupController($scope, $rootScope,DressupService) {
    $scope.data={
      model:null,
      avaliableLevels:{}
    };

    DressupService.GetLevels().then(function(data){
      $scope.data.avaliableLevels = data;
    });
  }
})();
