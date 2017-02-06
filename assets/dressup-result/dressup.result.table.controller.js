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
        return Math.floor(input);
      };
    });

  DressupResultTableController.$inject = ['$scope', '$rootScope'];

  function DressupResultTableController($scope, $rootScope) {
    //$scope.scoring = {};
    //$scope.wardrobe = {};
    //$scope.category = {};
    //$scope.bonus
    //$scope.weight 
    
    //$scope.totalscore = 0;
    $scope.AllList = {};
    $scope.contributionScore = {};
    
    
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
      
      if(
        $scope.contributionScore[$scope.AllList[$scope.category[1]][1]+$scope.AllList[$scope.category[1]][2]] >       
        $scope.contributionScore[$scope.AllList[$scope.category[3]][1]+$scope.AllList[$scope.category[3]][2]] +       
        $scope.contributionScore[$scope.AllList[$scope.category[4]][1]+$scope.AllList[$scope.category[4]][2]]  
      ){
        $scope.AllList[$scope.category[3]] = null;//delete $scope.AllList[$scope.category[3]];
        $scope.AllList[$scope.category[4]] = null;//delete $scope.AllList[$scope.category[4]];
      }else{
        $scope.AllList[$scope.category[1]] = null;//delete $scope.AllList[$scope.category[1]];
      }

      $scope.totalscore = 0;
      _.forEach($scope.AllList,function(o){
        if(_.isEmpty(o))
          return ;
        $scope.totalscore += $scope.contributionScore[o[1]+o[2]];
      });
      $scope.totalscore = Math.floor($scope.totalscore);
    };
    
    var ifBonusScore = function(clothes,bonus){
      var cnt = 0;
      _.forEach(bonus,function(o){
        if(_.isEqual(o.tag,clothes[14]) || _.isEqual(o.tag,clothes[0])){
          cnt += o.weight * $scope.scoring[clothes[1].split("-")[0]][o.base] * _.sumBy($scope.weight,function(w){return Math.abs(w);});
        }
      });
      return cnt;
    }
    var onDatasReady = function(){
      if(_.isEmpty($scope.scoring) || _.isEmpty($scope.wardrobe) || _.isEmpty($scope.category) ||  _.isEmpty($scope.weight)) // bonus could be empty
        return ;
      _.forEach($scope.wardrobe,function(clothes){
        $scope.contributionScore[clothes[1]+clothes[2]] = function(v){
          var cnt = 0;
          for(var i = 0 ; i < 5 ; i++ ){
            if(!_.isEmpty(v[4+2*i]) && $scope.weight[i] > 0){
              cnt += Math.abs( $scope.scoring[v[1].split("-")[0]][v[4+2*i]] * $scope.weight[i] );
            }else if(!_.isEmpty(v[5+2*i]) && $scope.weight[i] < 0){
              cnt += Math.abs( $scope.scoring[v[1].split("-")[0]][v[5+2*i]] * $scope.weight[i] );
            }
          }
          //bonus
          cnt += ifBonusScore(v,$scope.bonus);
          return cnt;
        }(clothes);
      });
      updateBestList();
    }

    $scope.$watch("wardrobe",onDatasReady);
    $scope.$watch("category",onDatasReady);
    $scope.$watch('scoring', onDatasReady);
    $scope.$watch("weight", onDatasReady);
    $scope.$watch("bonus", function(){
      if(!_.isEmpty($scope.bonus))
      onDatasReady();
    });
  }
})();
