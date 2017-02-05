(function () {
  'use strict';

  angular.module("nikki.wardrobe-all").directive("wardrobeAll", wardrobeAll);
  function wardrobeAll() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/wardrobe-all/wardrobe.all.html",
      controller: "WardrobeAllController"
    };
  }
})();
