"use strict";

angular.module("psFramework").directive("psFramework", function () {
    return {
        transclude: false,
        scope: { //isolate scope
            title: '@', // bind string one time
            subtitle: '@',
            iconFile: '@'
        },
        controller: "psFrameworkController",
        templateUrl: "ext-modules/psFramework/psFrameworkTemplate.html"
    };
});