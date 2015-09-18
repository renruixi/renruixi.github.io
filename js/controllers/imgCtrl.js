//imgCtrl

define(["app","getWidth"],function(app,getWidth){

	return app.controller("imgCtrl",["$scope","draginit",function($scope,draginit){
		
		$scope.width = "";

		var drag = new draginit.Draginit("handle","imgBox");
		drag.drag();

	}])

});