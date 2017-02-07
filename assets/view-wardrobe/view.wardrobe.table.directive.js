(function () {
  'use strict';

  angular.module("nikki.view.wardrobe-table").directive("viewWardrobeTable", viewWardrobeTable);
  function viewWardrobeTable() {
    return {
      restrict: "E",
      scope: {
        rowCollection: '=typedata',
        needscorecolumn: '=needscorecolumn'
      },
      templateUrl: "assets/view-wardrobe/view.wardrobe.table.html",
      controller: "ViewWardrobeTableController"
    };
  }
})();
