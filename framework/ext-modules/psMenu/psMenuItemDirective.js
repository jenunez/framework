"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu', //adding this we make sure that psMenuItem alwasy has a parent psMenu
        scope: { //isolate scope
            label: '@', //string value
            icon: '@',
            route: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {

            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            }

            el.on('click', function (evt) {
                evt.stopPropagation(); // this lines will give us 
                evt.preventDefault();  // exclusive access to this click event, it wont be propagated and default action will occur
                // the changes will occuer on psMenu Controller
                scope.$apply(function () {
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);
                });
            });
        }
    };
});