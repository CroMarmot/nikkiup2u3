(function () {
  'use strict';

  angular
      .module('nikki.wardrobe')
    .controller('DressupController', WardrobeController);

  WardrobeController.$inject = ['$scope', '$rootScope'];
  function WardrobeController($scope, $rootScope) {
  }
})();
