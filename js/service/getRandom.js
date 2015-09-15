//获取0~n的随机数
//调用方式   getRandom.random(length);
//
define(["app"],function(app){
	app.factory('getRandom',function(){

		function getRandom(length){
			return Math.round(Math.random()*length);
		}

		return {
			random : getRandom
		}

	});
});