(function () {
  'use strict';

  angular.module("nikki.dressup-all").directive("dressupAll", dressupAll);
  function dressupAll() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/dressup-all/dressup.all.html",
      controller: "DressupAllController"
    };
  }
})();
