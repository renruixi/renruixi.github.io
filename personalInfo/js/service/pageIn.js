define(["app","getRandom","method"],function(app,getRandom,method){

	app.factory("pageIn",["getRandom",function(getRandom){
		function pageIn(id){
			if(document.getElementById(id) !== null){
				var ele = document.getElementById(id),

					moveStyle = ["rotateLeft","moveDown","rotateTop","layDown"];


				var	style = moveStyle[getRandom.random(moveStyle.length - 1)];	

				method.addClass(ele,style+" animate animateView");
			}

		}

		return{
			pageIn : pageIn
		}
	}])	
});