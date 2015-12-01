

//入口文件
//2015/9/15


requirejs.config({
	baseUrl : "js/",
	paths:{
		'angular':"lib/angular.min",
		"angular-ui-router" : "lib/angular-ui-router.min",
		'jquery':'lib/jquery-1.11.3.min',

		
		"addAnimate" : "directive/addAnimate",
		"getWidth" : "directive/getWidth",
		"mouseWheel" :"directive/mousewheel",

		"getRandom" : "service/getRandom",
		"pageOut" : "service/pageOut",
		"pageIn" :"service/pageIn",
		"draginit" : "service/draginit",
		"proChange" :"service/proChange",


 
		"app":"controllers/app",

		"homeCtrl" : "controllers/homeCtrl",
		"imgCtrl" : "controllers/imgCtrl",
		"workCtrl" : "controllers/workCtrl",


		'route' : "routes/routes",


		"method" : "lib/method",
		"changeCSS" : "lib/changeCSS",
		"loading" : "lib/loading"


		

	},
	shim:{
		'jquery':{
			exports : "jquery"
		},
		'angular': {
            exports: 'angular'
        },
        "angular-ui-router":{
        	deps:["angular"],
        	exports:"angular-ui-router"
        }
	}
});



requirejs(["jquery","angular","angular-ui-router","route","app","homeCtrl","imgCtrl","workCtrl","addAnimate","getWidth","getRandom","pageOut","pageIn","changeCSS","method","loading","draginit","proChange","mouseWheel",],function($,angular){
	$(function(){
		angular.bootstrap(document,["myApp"]);
	})
});
