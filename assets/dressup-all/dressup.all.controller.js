(function () {
  'use strict';

  angular
    .module('nikki.dressup-all')
    .controller('DressupAllController', DressupAllController);
  DressupAllController.$inject = ['$scope', '$rootScope','DataService','CalcService'];
  function DressupAllController($scope, $rootScope,DataService,CalcService) {
    DataService.GetScoring().then(function(data){
      $rootScope.scoring = data;    
    });
    $scope.wardrobe = {};
    $scope.category = {};


    var onDatasReady = function(){
      if(_.isEmpty($rootScope.weight) || _.isEmpty($rootScope.scoring) || _.isEmpty($rootScope.wardrobe))
        return ;
      var wardrobe = _.cloneDeep($rootScope.wardrobe);
      _.forEach(wardrobe,function(o){
        //[TODO] dangerous 
        o[17] = CalcService.CalcScoring(o,$rootScope.bonus,$rootScope.scoring,$rootScope.weight);
      });
      $scope.wardrobe = _.sortBy(wardrobe,function(o){return -o[17];});    
    }


    $rootScope.$watch("weight",onDatasReady);
    $rootScope.$watch("scoring",onDatasReady);
    $rootScope.$watch("wardrobe",onDatasReady);

    $rootScope.$watch("categoryDetail",function(){
      if(_.isEmpty($rootScope.categoryDetail))
        return ;
      $scope.category = $rootScope.categoryDetail;
    });


  }
})();
