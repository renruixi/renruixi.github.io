/**
 * 建立angular.module
 */
define(["angular","angular-ui-router"], function (angular) {
    var app = angular.module("myApp", ["ui.router"]);
    
    return app;

});
