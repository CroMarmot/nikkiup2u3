(function () {
  'use strict';

  angular.module("nikki.dressup-result").directive("dressupResult", dressupResult);
  function dressupResult() {
    return {
      restrict: "E",
      scope: {
        weight:"=weight",
        bonus:"=bonus"
      },
      templateUrl: "assets/dressup-result/dressup.result.html",
      controller: "DressupResultController"
    };
  }
})();
