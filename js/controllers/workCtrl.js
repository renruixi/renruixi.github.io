define(["app","proChange"],function(app,proChange){
	app.controller("workCtrl",["$scope","proChange",function($scope,proChange){

		$scope.targetReverse={
			"tpl" :false,
			"tpr" :false,
			"btml" :false,
			"btmr" :false
		};

		$scope.target={
			"tpl" :false,
			"tpr" :false,
			"btml" :false,
			"btmr" :false
		};

		$scope.changeClass=function(dir){

			$scope.target[dir] = true;	

			proChange.forIn($scope.targetReverse,dir);

		};


	}]);
});