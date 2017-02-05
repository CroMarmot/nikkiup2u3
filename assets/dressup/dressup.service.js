(function () {
  'use strict';

  angular
    .module('nikki.dressup')
    .service('DressupService', DressupService);
  DressupService.$inject = ['$http'];
  function DressupService($http) {
    this.GetLevels = function(){
      return $http({
        method: 'GET',
        url: '/data/levels.json'
      }).then(function successCallback(response) {
        return response.data;

      }, function errorCallback(response) {
        console.log("wardrobe.json load Error");
        return {};
      }); 
    }
  }
})();
