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

    /*
     * wardrobe_base one category
     * wardrobe_str input like 001,2,003,4,5,6,1234
     * */
    function append2wardrobe(wardrobe_base,wardrobe_str){
      var appendwardrobe = [];
      _.forEach(wardrobe_str.split(","),function(value){
        if(value.length > 3)
          appendwardrobe.push(value);
        else if(value.length > 0)
          appendwardrobe.push(("000"+value).slice(-3));
      });
      return _.union(wardrobe_base,appendwardrobe);
    }

    $scope.appendClick = function(){
      //[TODO] use flash to show success/error message
      try{
        var loadwardrobe = $rootScope.mineWardrobe;
        var appendwardrobe = $scope.view.append;
        appendwardrobe = _.replace(appendwardrobe," ","");//remove all space
        if(_.isUndefined(loadwardrobe))
          loadwardrobe = {};
        // compatibility for 上衣:001,002|下装:234,567
        if(_.isEmpty($scope.data.category)){
          var categorys = appendwardrobe.split("|");
          _.forEach(categorys,function(v){
            var parts = v.split(":");
            if(parts.length == 2){
              var cg=parts[0],apw=parts[1];//category and append wardrobe
              loadwardrobe[cg]=append2wardrobe(loadwardrobe[cg],apw);
            }
          });
        }else{
          loadwardrobe[$scope.data.category]=append2wardrobe(loadwardrobe[$scope.data.category],appendwardrobe);
        }
        $rootScope.mineWardrobe = loadwardrobe;
        DataService.SetMineWardrobe(loadwardrobe);
      }catch(err){
        console.dir(err.message);
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
