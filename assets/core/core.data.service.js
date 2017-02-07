(function () {
  'use strict';

  angular
    .module('nikki.core')
    .service('DataService', DataService);
  
  DataService.$inject = ['$http','localStorageService'];

  function DataService($http,localStorageService) {
    this.GetScoring = function(){
      return $http.get('data/scoring.json').then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("scoring.json load Error");
        return {};
      }); 
    };

    this.GetMineWardrobe = function(){
      return localStorageService.get("MineWardrobe");
    }
    
    this.SetMineWardrobe = function(value){
      return localStorageService.set("MineWardrobe",value);
    }
    
    this.GetWardrobe = function(){
      return $http({
        method: 'GET',
        url: 'data/wardrobe.json'
        //[[ name, type, id , hearts, gorgeous, simple, elegant, active, mature, cute, sexy, pure, cool, warm，extra, source, suit],]
        /*
         wardrobe.sort(function(a,b){return a[1]==b[1]?a[2].localeCompare(b[2]):a[1].localeCompare(b[1]);})
         for(i in wardrobe){wardrobe[i].pop();if(wardrobe[i][1]=="上装")wardrobe[i][1]="上衣";}
         $('[name="message"]').val(JSON.stringify(wardrobe));
        */
      }).then(function successCallback(response) {
        var ret = [];
        _.forEach(response.data,function(o){
          ret.push([ //reorder
            o[0],//name
            o[1],//type
            o[2],//id
            o[3],//hearts

            o[5],//simple
            o[4],//gorgeous

            o[9],//cute
            o[8],//mature

            o[7],//active
            o[6],//elegant

            o[11],//pure
            o[10],//sexy

            o[12],//cool
            o[13],//warm

            o[14],//extra
            o[15],//source
            o[16]//suit
          ]);
        });
        return ret;
      }, function errorCallback(response) {
        console.log("wardrobe.json load Error");
        return {};
      }); 
    }
    this.GetCategory = function(){
      return $http({
        method: 'GET',
        url: 'data/category.json'
        //[name,]
      }).then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("category.json load Error");
        return {};
      }); 
    }
  }
})();
