define(["app","proChange"],function(app,proChange){
	app.controller("workCtrl",["$scope","proChange",function($scope,proChange){

		$scope.targetReverse={
			"tpl" :false,
			"tpr" :false,
			"btml" :false,
			"btmr" :false
		};

		$scope.IntargetReverse={
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
		
		$scope.Intarget={
			"tpl" :false,
			"tpr" :false,
			"btml" :false,
			"btmr" :false
		};
		

		$scope.changeClass=function(dir){

			$scope.target[dir] = true;	
			
			proChange.forIn($scope.Intarget,dir,true);
			proChange.forIn($scope.IntargetReverse,dir,false,true);
			proChange.forIn($scope.targetReverse,dir,false,true);
			proChange.forIn($scope.target,dir,false,false);

		};
		
		
		$scope.close=function(dir){
			
			$scope.targetReverse[dir] = true;

			proChange.forIn($scope.IntargetReverse,dir,true);
			proChange.forIn($scope.Intarget,dir,false,true);
			proChange.forIn($scope.targetReverse,dir,false,false);
			proChange.forIn($scope.target,dir,false,true);
		}


	}]);
});