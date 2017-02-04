(function () {
  'use strict';

  angular.module("nikki.wardrobe").directive("wardrobe", wardrobe);
  function wardrobe() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/wardrobe/wardrobe.html",
      controller: "DressupController"
    };
  }
})();
