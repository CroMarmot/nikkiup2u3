(function () {
  'use strict';

  angular
    .module('nikki.dressup')
    .controller('DressupController', DressupController);
  DressupController.$inject = ['$scope', '$rootScope','DressupService'];
  function DressupController($scope, $rootScope,DressupService) {
    $scope.data={
      availableLevels:{},
      names:[["简约","华丽"],["可爱","成熟"],["活泼","优雅"],["清纯","性感"],["清凉","保暖"]],
      viewPN:[1,1,1,1,1],//positive or negtive
      viewValue:[null,null,null,null,null],
      bonus:[],
      blacklist:{}
    };
    var bonus={};

    DressupService.GetLevels().then(function(data){
      $scope.data.availableLevels = data;
    });

    $scope.onLevelChange = function(lvlname){
      if(_.isEmpty(lvlname))
        return ;
      for(var i in $scope.data.availableLevels[lvlname]){
       $scope.data.viewPN[i]=Math.sign($scope.data.availableLevels[lvlname][i]);      
       $scope.data.viewValue[i]=Math.abs($scope.data.availableLevels[lvlname][i]);      
      }
      $scope.data.bonus = _.clone(bonus[lvlname]);

      $rootScope.weight = _.cloneDeep($scope.data.availableLevels[lvlname]);
      $rootScope.bonus = _.cloneDeep(bonus[lvlname]);
    };
    DressupService.GetBonus().then(function(data){
      bonus = data;
    });
    // [TODO] blacklists
    //DressupService.GetBlacklists().then(function(data){
    //});
  }
})();
