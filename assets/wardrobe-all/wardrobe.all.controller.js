(function () {
  'use strict';

  angular
    .module('nikki.wardrobe-all')
    .controller('WardrobeAllController', WardrobeAllController);

  WardrobeAllController.$inject = ['$scope', '$rootScope','$q','WardrobeAllService'];
  function WardrobeAllController($scope, $rootScope,$q,WardrobeAllService) {
    var wardrobe = {};
    var category = {};
    var onDatasReady=function(){
      if(_.isEmpty(wardrobe) || _.isEmpty(category))
        return ;
      $rootScope.wardrobe = wardrobe;
      $rootScope.category = category;
      $scope.viewdata = {};
      for(var i = 0 ; i < category.length;i++){
        var clothType = category[i];
        $scope.viewdata[clothType] = _.filter(wardrobe,function(o){return o[1] == clothType;});
      }
      console.log($scope.viewdata);
    }
    WardrobeAllService.GetWardrobe().then(function(wd){
      wardrobe = wd;
      onDatasReady();
    });
    WardrobeAllService.GetCategory().then(function(cg){
      category = cg;
      onDatasReady();
    });
  }
})();
