(function () {
  'use strict';

  angular.module("nikki.dressup-result-table").directive("dressupResultTable", dressupResultTable);
  function dressupResultTable() {
    return {
      restrict: "E",
      scope: {
        //two way
        wardrobe:"=wardrobe",
        totalscore:"=totalscore",
        //one-way
        scoring:"=",
        category:"=",
        bonus:"=",
        weight:"="
      },
      templateUrl: "assets/dressup-result/dressup.result.table.html",
      controller: "DressupResultTableController"
    };
  }
})();
