(function () {
  'use strict';

  angular
    .module('nikki.dressup-result')
    .controller('DressupResultController', DressupResultController);

  angular
    .module('nikki.dressup-result')
    .filter('numberfilter',function(){
      return function(input){
        if(_.isUndefined(input))
          return "";
        return Math.floor(input);
      };
    });


  DressupResultController.$inject = ['$scope', '$rootScope'];

  function DressupResultController($scope, $rootScope) {
    $scope.scoring = {};
    $scope.wardrobe = {};
    $scope.category = {};
    $scope.AllList = {};
    
    $scope.contributionScore = {};
    $scope.totalScoe = 0;
    
    //$scope.bonus
    //$scope.weight 
    
    var updateAllBestList = function(){
      $scope.AllList = {};
      _.forEach($scope.category,function(cg){
        _.forEach($scope.wardrobe,function(wd){
          if(!_.includes(wd[1],cg))
            return ;
          $scope.AllList[cg] = 
            _.isUndefined($scope.AllList[cg]) ? 
            wd : 
            (
              $scope.contributionScore[wd[1]+wd[2]] > $scope.contributionScore[$scope.AllList[cg][1]+$scope.AllList[cg][2]] ?
              wd :
              $scope.AllList[cg]
            );
        });
      });
      
      if(
        $scope.contributionScore[$scope.AllList[$scope.category[1]][1]+$scope.AllList[$scope.category[1]][2]] >       
        $scope.contributionScore[$scope.AllList[$scope.category[3]][1]+$scope.AllList[$scope.category[3]][2]] +       
        $scope.contributionScore[$scope.AllList[$scope.category[4]][1]+$scope.AllList[$scope.category[4]][2]]  
      ){
        $scope.AllList[$scope.category[3]] = null;
        $scope.AllList[$scope.category[4]] = null;
        //delete $scope.AllList[$scope.category[3]];
        //delete $scope.AllList[$scope.category[4]];
      }else{
        $scope.AllList[$scope.category[1]] = null;
        //delete $scope.AllList[$scope.category[1]];
      }

      $scope.totalScore = 0;
      console.log($scope.AllList);
      _.forEach($scope.AllList,function(o){
        if(_.isEmpty(o))
          return ;
        $scope.totalScore += $scope.contributionScore[o[1]+o[2]];
      });
    };
    var updateMineBestList = function(){
      //[TODO] mine data
    };
    
    var onDatasReady = function(){
      if(_.isEmpty($scope.scoring) || _.isEmpty($scope.wardrobe) || _.isEmpty($scope.category) ||  _.isEmpty($scope.weight)) // bonus could be empty
        return ;
      console.log("onDatasReady",JSON.stringify($scope.bonus));
      _.forEach($scope.wardrobe,function(value){
        $scope.contributionScore[value[1]+value[2]] = function(v){
          var cnt = 0;
          for(var i = 0 ; i < 5 ; i++ ){
            if(!_.isEmpty(v[4+2*i]) && $scope.weight[i] > 0){
              cnt += Math.abs( $scope.scoring[v[1].split("-")[0]][v[4+2*i]] * $scope.weight[i] );
            }else if(!_.isEmpty(v[5+2*i]) && $scope.weight[i] < 0){
              cnt += Math.abs( $scope.scoring[v[1].split("-")[0]][v[5+2*i]] * $scope.weight[i] );
            }
          }
          //[TODO]bonus
          return cnt;
        }(value);
      });
      updateAllBestList();
      updateMineBestList();
    }
    $rootScope.$watch("wardrobe",function(){
      if(_.isEmpty($rootScope.wardrobe))
        return ;
      //[TODO]three times here means i nead fix this bug
      $scope.wardrobe = $rootScope.wardrobe;
      onDatasReady();
    });
    $rootScope.$watch("categoryDetail",function(){
      if(_.isEmpty($rootScope.categoryDetail))
        return ;
      $scope.category = $rootScope.categoryDetail;
      onDatasReady();
    });
    $rootScope.$watch('scoring',function(){
      if(_.isEmpty($rootScope.scoring))
        return ;
      $scope.scoring = $rootScope.scoring;
      onDatasReady();  
    });
    $scope.$watch("weight",function(){
      if(_.isEmpty($scope.weight))
        return ;
      onDatasReady();  
    });
    $scope.$watch("bonus",function(){
      if(_.isEmpty($scope.bonus))
        return ;
      onDatasReady();  
    });
  }
})();
