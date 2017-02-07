(function () {
  'use strict';

  angular
    .module('nikki.view.wardrobe-table')
    .controller('ViewWardrobeTableController', ViewWardrobeTableController);

  ViewWardrobeTableController.$inject = ['$scope', '$rootScope'];
  function ViewWardrobeTableController($scope, $rootScope) {
    //[TODO] 多级关键字
    //"SS" > "S" > "A" > "B" > "C" > ""
    $scope.sortByRank =function(o){
      return function(row){
        return {"":-1,"C":0,"B":1,"A":2,"S":3,"SS":4}[row[o]];
      }
    }
    
  }
})();
