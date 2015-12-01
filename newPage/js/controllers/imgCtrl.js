//imgCtrl

define(["app","getWidth"],function(app,getWidth){

	return app.controller("imgCtrl",["$scope","draginit",function($scope,draginit){
		
		$scope.width = "";
		$scope.finish = false;
		
		var drag = new draginit.Draginit("handle","imgBox");
		drag.drag(function(finish){
			$scope.finish = finish;
		});
		
		

	}])

});