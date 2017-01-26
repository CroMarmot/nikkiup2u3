(function () {
  'use strict';

  angular.module("nikki.main").directive("nikkiMain", nikkiMain);
  function nikkiMain() {
    return {
      restrict: "E",
      scope: {},
      templateUrl: "assets/main/main.html",
      controller: "MainController"
    };
  }
})();
