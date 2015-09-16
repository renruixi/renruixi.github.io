//路由

define(["app"],function(app){

	return app.config(["$routeProvider",function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:'tpl/home.html',
				controller : "homeCtrl"
			})
			.when("/home",{
				templateUrl:'tpl/home.html',
				controller : "homeCtrl"
			})
			.when("/production",{
				templateUrl : "tpl/production.html",
				controller : "workCtrl"
			})
			.when("/images",{
				templateUrl : "tpl/images.html",
				controller : "imgCtrl"
			})
			.otherwise({redirectTo : "/"});

			// $locationProvider.html5Mode(true);
	}]);


});
// .when("/favorites",{
// 				templateUrl:"",
// 				controller : "favCtrl"
// 			})
// 			.when("/image",{
// 				templateUrl : "",
// 				controller : "imgCtrl"
// 			})
// 			.when("/github",{
// 				templateUrl : "",
// 				controller : "gitCtrl"
// 			})
// 			.when("/fonttech",{
// 				templateUrl : "",
// 				controller : "techCtrl"
// 			})