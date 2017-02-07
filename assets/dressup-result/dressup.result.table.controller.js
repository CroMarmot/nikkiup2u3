(function () {
  'use strict';

  angular
    .module('nikki.dressup-result-table')
    .controller('DressupResultTableController', DressupResultTableController);

  angular
    .module('nikki.dressup-result-table')
    .filter('numberfilter',function(){
      return function(input){
        if(_.isUndefined(input))
          return "";
        return input;
      };
    });

  DressupResultTableController.$inject = ['$scope', '$rootScope','CalcService'];

  function DressupResultTableController($scope, $rootScope,CalcService) {
    //$scope.scoring = {};
    //$scope.wardrobe = {};
    //$scope.category = {};
    //$scope.bonus
    //$scope.weight 
    
    //$scope.totalscore = 0;
    $scope.AllList = {};
    $scope.contributionScore = {"":0};
    
    
    var updateBestList = function(){
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
      // 上衣+裤子 或 连衣裙/ 饰品-手饰·左+饰品-手饰·右 或 饰品-手饰·双 / 饰品-手持·右+饰品-手持·左 或 饰品-手持·双
      var conflictindex = [[[1],[3,4]],[[17],[15,16]],[[20],[18,19]]];
      _.forEach(conflictindex,function(pair){ // pair = [[1],[3,4]]
        var paircnt = [];
        for(var i in pair){
          paircnt[i] = _.sumBy(pair[i],function(o){
            if(_.isUndefined($scope.AllList[$scope.category[o]])){
              console.log("缺少部件 "+$scope.category[o]);
              return 0;
            }
            return $scope.contributionScore[$scope.AllList[$scope.category[o]][1]+$scope.AllList[$scope.category[o]][2]];
          });
        }
        var maxcnt = _.max(paircnt);
        for(var i in paircnt){
          if(paircnt[i] != maxcnt){
            _.forEach(pair[i],function(o){
              $scope.AllList[$scope.category[o]] = "";
            });
          
          }
        }
      }); 
      /*
      if(
        $scope.contributionScore[$scope.AllList[$scope.category[1]][1]+$scope.AllList[$scope.category[1]][2]] >       
        $scope.contributionScore[$scope.AllList[$scope.category[3]][1]+$scope.AllList[$scope.category[3]][2]] +       
        $scope.contributionScore[$scope.AllList[$scope.category[4]][1]+$scope.AllList[$scope.category[4]][2]]  
      ){
        $scope.AllList[$scope.category[3]] = null;//delete $scope.AllList[$scope.category[3]];
        $scope.AllList[$scope.category[4]] = null;//delete $scope.AllList[$scope.category[4]];
      }else{
        $scope.AllList[$scope.category[1]] = null;//delete $scope.AllList[$scope.category[1]];
      }*/

      $scope.totalscore = 0;
      _.forEach($scope.AllList,function(o){
        if(_.isEmpty(o))
          return ;
        $scope.totalscore += $scope.contributionScore[o[1]+o[2]];
      });
      $scope.totalscore = $scope.totalscore;
    };
    
    
    var onDatasReady = function(){
      if(_.isEmpty($scope.scoring) || _.isEmpty($scope.wardrobe) || _.isEmpty($scope.category) ||  _.isEmpty($scope.weight)) // bonus could be empty
        return ;
      //for(var i in $scope.category)(console.log(i,$scope.category[i]));
      _.forEach($scope.wardrobe,function(clothes){
        $scope.contributionScore[clothes[1]+clothes[2]] = CalcService.CalcScoring(clothes,$scope.bonus,$scope.scoring,$scope.weight);
      });
      updateBestList();
    }

    $scope.$watch("wardrobe",onDatasReady);
    $scope.$watch("category",onDatasReady);
    $scope.$watch("scoring", onDatasReady);
    $scope.$watch("weight", onDatasReady);
    $scope.$watch("bonus", function(){
      if(!_.isEmpty($scope.bonus))
      onDatasReady();
    });
  }
})();
