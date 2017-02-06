(function () {
  'use strict';

  angular
    .module('nikki.wardrobe-mine')
    .controller('WardrobeMineController', WardrobeMineController);

  WardrobeMineController.$inject = ['$scope', '$rootScope','DataService'];
  function WardrobeMineController($scope, $rootScope,DataService) {
    $scope.view = {
      append : "",
      syn : "",
      category : {}
    };

    $scope.data = {
      category : null 
    };

    init();

    //[TODO use lock?]
    
    var onDatasReady = function(){
      if(_.isEmpty($rootScope.wardrobe))// mineWardrobe
        return ;
      $scope.wardrobe = _.filter($rootScope.wardrobe,function(o){
        return _.includes( $rootScope.mineWardrobe[o[1].split("-")[0]],o[2]);
      });       
    };


    $rootScope.$watch("wardrobe", onDatasReady);
    $rootScope.$watch("mineWardrobe",onDatasReady);
    
    $rootScope.$watch("categoryMain",function(){
      $scope.category = $rootScope.categoryMain;    
    });

    $scope.appendClick = function(){
      //[TODO] use flash to show success/error message
      try{
        //[TODO] finish add function
        //var loadwardrobe = JSON.parse($scope.view.syn);
        //$rootScope.mineWardrobe = loadwardrobe;
        //DataService.SetMineWardrobe(loadwardrobe);
      }catch(err){
        console.log(err.message);      
      }
    };
    
    $scope.synClick = function(){
      //[TODO] use flash to show success/error message
      try{
        var loadwardrobe = JSON.parse($scope.view.syn);
        $rootScope.mineWardrobe = loadwardrobe;
        DataService.SetMineWardrobe(loadwardrobe);
      }catch(err){
        console.log(err.message);      
      }
    };

    $rootScope.$watch("categoryMain",function(){
      if(_.isEmpty($rootScope.categoryMain))
        return ;
      $scope.view.category = $rootScope.categoryMain;
    });

    function init(){
      $rootScope.mineWardrobe = DataService.GetMineWardrobe();
      $scope.view.syn = JSON.stringify(DataService.GetMineWardrobe());
    };
  }
})();
