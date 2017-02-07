(function () {
  'use strict';

  angular
    .module('nikki.view.wardrobe')
    .controller('ViewWardrobeController', ViewWardrobeController);

  ViewWardrobeController.$inject = ['$scope', '$rootScope']//,'ViewWardrobeService'];
  function ViewWardrobeController($scope, $rootScope){//,ViewWardrobeService) {
    $scope.needscorecolumn = 0;
    var onDatasReady = function(){
      if(_.isEmpty($scope.wardrobe) || _.isEmpty($scope.category))
        return ;
      $scope.viewdata = {};
      for(var i = 0 ; i < $scope.category.length;i++){
        var clothType =  $scope.category[i];
        $scope.viewdata[clothType] = _.filter($scope.wardrobe,function(o){return _.includes(o[1],clothType);});
      }
    };

    $scope.$watch("wardrobe",onDatasReady);
    $scope.$watch("category",onDatasReady);
    $scope.$watch("sortbyscore",function(){
      $scope.needscorecolumn = _.isUndefined($scope.sortbyscore) ? 0 : 1;
    });
  }
})();
