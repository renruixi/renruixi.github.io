//路由

define(["app","pageOut","pageIn","changeCSS"],function(app,pageOut,pageIn,changeCSS){

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
		.run(["$rootScope","$state","pageOut","pageIn",function($rootScope,$state,pageOut,pageIn){
			//一旦ui-view中的DOM渲染完成后，触发事件
			$rootScope.$on("$viewContentLoaded",function(event){
				pageIn.pageIn("perspective");
				pageOut.pageOut("perspective");
			});
			

			$rootScope.$on("$viewContentLoading",function(event){
				changeCSS.css();
				
			});
			// $rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){
			// 	hash.hashchange("homeNav","perspective");
			// });
		}]);


});
