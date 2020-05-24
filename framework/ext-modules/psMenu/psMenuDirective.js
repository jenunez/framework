"use strict";

angular.module('psMenu').directive('psMenu', function () {
    return {
        transclude: true,
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuController',
        linl: function (scpoe, el, attr) {

        }
    };
});