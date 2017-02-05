(function () {
  'use strict';

  angular.module("nikki.wardrobe-mine").directive("wardrobeMine", wardrobeMine);
  function wardrobeMine() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/wardrobe-mine/wardrobe.mine.html",
      controller: "WardrobeMineController"
    };
  }
})();
