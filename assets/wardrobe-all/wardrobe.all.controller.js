(function () {
  'use strict';

  angular
    .module('nikki.wardrobe-all')
    .controller('WardrobeAllController', WardrobeAllController);

  WardrobeAllController.$inject = ['$scope', '$rootScope','DataService'];
  function WardrobeAllController($scope, $rootScope,DataService) {
    //[TODO use lock?]
    if(_.isEmpty($rootScope.wardrobe)){
      DataService.GetWardrobe().then(function(wd){
        $scope.wardrobe = $rootScope.wardrobe = wd;
      });
    }else{
      $scope.wardrobe = $rootScope.wardrobe;
    }

    if(_.isEmpty($rootScope.categoryMain)){
      DataService.GetCategory().then(function(cg){      
        $rootScope.categoryMain = cg.mainIndex;
        $rootScope.categoryDetail = cg.detailIndex;
        $scope.category = $rootScope.categoryDetail;
      });
    }else{
      $scope.category = $rootScope.categoryDetail;
    }
  }
})();
