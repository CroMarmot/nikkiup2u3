(function () {
  'use strict';

  angular
    .module('nikki.view.wardrobe-table')
    .controller('ViewWardrobeTableController', ViewWardrobeTableController)
    .filter('ViewWardrobeTableCustomFilter',ViewWardrobeTableCustomFilter);

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

  ViewWardrobeTableCustomFilter.$inject = ['$filter'];
  function ViewWardrobeTableCustomFilter($filter){
    return function(input, predicate){
      var i , l = input.length, ret = [];
      for(i = 0; i < l; i++) {
        var isInclude = true;
        _.forEach(predicate,function(val,key){
          var arri = key.slice(1);
          if(!_.includes(input[i][arri],val))
            isInclude = false;
        });
        if(isInclude)
          ret.push(input[i]);
      }
      return ret;
    }
  }
})();
