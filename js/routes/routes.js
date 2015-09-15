//路由

define(["app"],function(app){

	return app.config(["$routeProvider",function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:'tpl/home.html',
				controller : "homeCtrl"
			})
			.otherwise({redirectTo : "/"});

			// $locationProvider.html5Mode(true);
	}]);


});


// .when("/works",{
			// 	templateUrl : "",
			// 	controller : "workCtrl"
			// })
			// .when("/favorites",{
			// 	templateUrl:"",
			// 	controller : "favCtrl"
			// })
			// .when("/image",{
			// 	templateUrl : "",
			// 	controller : "imgCtrl"
			// })
			// .when("/github",{
			// 	templateUrl : "",
			// 	controller : "gitCtrl"
			// })
			// .when("/fonttech",{
			// 	templateUrl : "",
			// 	controller : "techCtrl"
			// })