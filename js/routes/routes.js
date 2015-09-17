//路由

define(["app","hashchange"],function(app,hash){

	return app.config([
		"$stateProvider",
		"$urlRouterProvider",
		function($stateProvider,$urlRouterProvider){


			$urlRouterProvider.when("", "/home");

			$stateProvider
				.state("home",{
					url : "/home",
					templateUrl:'tpl/home.html',
					controller : "homeCtrl"
				})
				.state ("production",{
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
		}])
		.run(["$rootScope","$state",function($rootScope,$state){
			$rootScope.$on("$viewContentLoaded",function(){
				hash.hashchange("homeNav","perspective");
			});
			
			// $rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){
			// 	hash.hashchange("homeNav","perspective");
			// });
		}]);


});
