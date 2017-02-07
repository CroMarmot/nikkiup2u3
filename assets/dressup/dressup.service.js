(function () {
  'use strict';

  angular
    .module('nikki.dressup')
    .service('DressupService', DressupService);
  DressupService.$inject = ['$http'];
  function DressupService($http) {
    this.GetLevels = function(){
      //simple,cute,active,pure,cool
      return $http.get('data/levels.json').then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("levels.json load Error");
        return {};
      }); 
    }
    this.GetBonus = function(){
      return $http.get('data/bonus.json').then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("bonus.json load Error");
        return {};
      }); 
    }
    this.GetBlacklists = function(){
      return $http.get('data/blacklists.json').then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("blacklists.json load Error");
        return {};
      }); 
    }
  }
})();
