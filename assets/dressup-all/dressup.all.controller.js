(function () {
  'use strict';

  angular
    .module('nikki.dressup-all')
    .controller('DressupAllController', DressupAllController);
  DressupAllController.$inject = ['$scope', '$rootScope','DataService'];
  function DressupAllController($scope, $rootScope,DataService) {
    DataService.GetScoring().then(function(data){
      $rootScope.scoring = data;    
    });
  }
})();
