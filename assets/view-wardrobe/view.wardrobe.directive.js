(function () {
  'use strict';

  angular.module("nikki.view.wardrobe").directive("viewWardrobe", viewWardrobe);
  function viewWardrobe() {
    return {
      restrict: "E",
      scope: {
        wardrobe : "=wardrobe",
        category : "=category"
      },
      templateUrl: "assets/view-wardrobe/view.wardrobe.html",
      controller: "ViewWardrobeController"
    };
  }
})();
