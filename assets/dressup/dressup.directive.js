(function () {
  'use strict';

  angular.module("nikki.dressup").directive("dressUp", dressUp);
  function dressUp() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/dressup/dressup.html",
      controller: "DressupController"
    };
  }
})();
