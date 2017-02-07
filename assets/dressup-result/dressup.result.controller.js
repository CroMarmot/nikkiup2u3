(function () {
  'use strict';

  angular
    .module('nikki.dressup-result')
    .controller('DressupResultController', DressupResultController);


  DressupResultController.$inject = ['$scope', '$rootScope'];

  function DressupResultController($scope, $rootScope) {
    $scope.scoring = {};
    $scope.category = {};
    //$scope.bonus
    //$scope.weight 
    
    $scope.wardrobeall = {};
    $scope.wardrobemine = {};
    $scope.wardrobeavailable = {};

    var onMineWardrobeReady = function(){
      if(_.isEmpty($rootScope.wardrobe) || _.isEmpty($rootScope.mineWardrobe))
        return ;
      if(_.isEmpty($rootScope.mineWardrobe["连衣裙"]) && (_.isEmpty($rootScope.mineWardrobe["上衣"]) || _.isEmpty($rootScope.mineWardrobe["下装"])))
        return ;
      $scope.wardrobemine = _.filter($rootScope.wardrobe,function(o){
        return _.includes($rootScope.mineWardrobe[o[1].split("-")[0]],o[2]);          
      });
    }
    
    $rootScope.$watch("wardrobe",function(){
      if(_.isEmpty($rootScope.wardrobe))
        return ;
      //[TODO]three times here means i nead fix this bug
      onMineWardrobeReady();
      $scope.wardrobeall = $rootScope.wardrobe;
      //[TODO] wardrobeavailable
    });

    $rootScope.$watch("categoryDetail",function(){
      if(_.isEmpty($rootScope.categoryDetail))
        return ;
      $scope.category = $rootScope.categoryDetail;
    });
    $rootScope.$watch('scoring',function(){
      if(_.isEmpty($rootScope.scoring))
        return ;
      $scope.scoring = $rootScope.scoring;
    });
    $rootScope.$watch("mineWardrobe",onMineWardrobeReady);
   
  }
})();
