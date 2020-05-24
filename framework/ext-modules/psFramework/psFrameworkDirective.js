"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: true,
        scope: { //isolate scope
            title: '@', // bind string one time string value
            subtitle: '@',
            iconFile: '@'
        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});