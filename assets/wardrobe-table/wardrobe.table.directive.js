(function () {
  'use strict';

  angular.module("nikki.wardrobe-table").directive("wardrobeTable", wardrobeTable);
  function wardrobeTable() {
    return {
      restrict: "E",
      scope: {
        rowCollection: '=typedata'
      },
      templateUrl: "assets/wardrobe-table/wardrobe.table.html",
      controller: "WardrobeTableController"
    };
  }
})();
