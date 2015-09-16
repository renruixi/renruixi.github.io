//imgCtrl

define(["app","getWidth"],function(app,getWidth){

	return app.controller("imgCtrl" , ["$scope","getWidth",function($scope,getWidth){
		
		$scope.width = getWidth.width;

	}])

});