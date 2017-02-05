(function () {
  'use strict';

  angular
    .module('nikki.wardrobe-all')
    .service('WardrobeAllService', WardrobeAllService);
  WardrobeAllService.$inject = ['$http'];
  function WardrobeAllService($http) {
    this.GetWardrobe = function(){
      return $http({
        method: 'GET',
        url: '/data/wardrobe.json'
        //{[ name, type, id , hearts, gorgeous, simple, elegant, active, mature, cute, sexy, pure, cool, warm，extra, source, suit]}
      }).then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("wardrobe.json load Error");
        return {};
      }); 
    }
    this.GetCategory = function(){
      return $http({
        method: 'GET',
        url: '/data/category.json'
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
