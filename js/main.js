

//入口文件
//2015/9/15


requirejs.config({
	baseUrl:"js/",
	paths:{
		'angular':"lib/angular.min",
		'angular-route' : "lib/angular-route.min",
		'jquery':'lib/jquery-1.11.3.min',

		
		"addAnimate" : "directive/addAnimate",
		"getWidth" : "directive/getWidth",

		"getRandom" : "service/getRandom",


		"app":"controllers/app",

		"homeCtrl" : "controllers/homeCtrl",
		"imgCtrl" : "controllers/imgCtrl",
		"workCtrl" : "controllers/workCtrl",


		'route' : "routes/routes",

	},
	shim:{
		'jquery':{
			exports : "jquery"
		},
		'angular': {
            exports: 'angular'
        },
        'angular-route':{
           deps: ["angular"],
           exports: 'angular-route'
        },
	}
});



requirejs(["jquery","angular",'angular-route',"app","route","homeCtrl","imgCtrl","workCtrl","addAnimate","getWidth","getRandom"],function($,angular){
	$(function(){
		angular.bootstrap(document,["myApp"]);
	})
});
