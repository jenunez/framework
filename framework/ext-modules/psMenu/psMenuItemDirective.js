"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu', //adding this we make sure that psMenuItem alwasy has a parent psMenu
        scope: { //isolate scope
            label: '@' //string value
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        linl: function (scpoe, el, attr, ctrl) {

        }
    };
});