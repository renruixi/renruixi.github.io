//路由

define(["app","pageOut","pageIn","changeCSS","loading"],function(app,pageOut,pageIn,changeCSS,loading){

	return app.config([
		"$stateProvider",
		"$urlRouterProvider",
		"$locationProvider",
		function($stateProvider,$urlRouterProvider,$locationProvider){


			$urlRouterProvider.otherwise("/home");

			$stateProvider
				.state(" ",{
					url : "/home",
					templateUrl:'tpl/home.html',
					controller : "homeCtrl"
				})
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
				});

				 //$locationProvider.html5Mode(true);
		}])
		.run(["$rootScope","$state","pageOut","pageIn",function($rootScope,$state,pageOut,pageIn){

			$rootScope.$state = $state;
			//一旦ui-view中的DOM渲染完成后，触发事件
			$rootScope.$on("$viewContentLoaded",function(event){
				//view  loaded后，给已定位好的元素删去class回归原位，并添加相应的点击切换函数
				pageIn.pageIn("perspective");
				pageOut.pageOut("perspective");
			});
			

			$rootScope.$on("$viewContentLoading",function(event){
				//view loading时，进行loading动画，并提前给相关元素添加class
				loading.loading();
				changeCSS.css();
				
			});
			// $rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){
			// 	hash.hashchange("homeNav","perspective");
			// });
		}]);


});
