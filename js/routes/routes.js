//路由

define(["app"],function(app){

	return app.config([
		"$stateProvider",
		"$urlRouterProvider",
		"$locationProvider",
		function($stateProvider,$urlRouterProvider,$locationProvider){

		$urlRouterProvider.when("", "/home");

		$stateProvider
			.state("home",{
				url : "/home",
				templateUrl:'tpl/home.html',
				controller : "homeCtrl"
			})
			.state("production",{
				url : "/production",
				templateUrl : "tpl/production.html",
				controller : "workCtrl"
			})
			.state("images",{
				url : "/images",
				templateUrl : "tpl/images.html",
				controller : "imgCtrl"
			})

			// $locationProvider.html5Mode(true).hashPrefix('!');
	}]);


});
