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
			.when("/works",{
				templateUrl : "tpl/works.html",
				controller : "workCtrl"
			})
			.when("/images",{
				templateUrl : "tpl/image.html",
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