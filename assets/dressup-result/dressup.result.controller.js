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
    
    $scope.wardrobemine = {};
    $scope.wardrobeall = {};
    $scope.wardrobeavailable = {};
    
    $rootScope.$watch("wardrobe",function(){
      if(_.isEmpty($rootScope.wardrobe))
        return ;
      //[TODO]three times here means i nead fix this bug
      //[TODO] wardrobemine
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
  }
})();
