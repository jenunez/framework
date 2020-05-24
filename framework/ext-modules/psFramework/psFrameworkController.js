﻿"use strict";

angular.module("psFramework").controller("psFrameworkController",
    ['$scope',
        function ($scope) {

            $scope.isMenuButtonVisible = true;

            // actual routing
            $scope.$on('ps-menu-item-selected-event', function (evt, data) {
                $scope.routeString = data.route;
            });
        }
    ]);