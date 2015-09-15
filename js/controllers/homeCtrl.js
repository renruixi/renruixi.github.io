//homeCtrl

define(["app","getRandom"],function(app,getRandom){
	return app.controller("homeCtrl",['$scope',"$timeout","getRandom",function($scope,$timeout,getRandom){
		
		//定义运动类型数组
		//
		
		$scope.animateStyle = ["rotateLeft","moveDown","rotateTop","layDown"];
		$scope.direction = "";
		$scope.style="";
		$scope.ischanged = false;
		//点击事件使得每次随机获取运动类型
		$scope.changeStyle = function(ev){

			$scope.style = "";
			var length = $scope.animateStyle.length;

			$scope.style = $scope.animateStyle[getRandom.random(length-1)];
			switch($scope.style){
				case "rotateLeft":
						$scope.direction = "right vertical";
						break;
				case "rotateTop":
						$scope.direction = "bottom  horizontal";
						break;
				case "layDown":
				case "moveDown":
						$scope.direction = "top horizontal";
			}
			$timeout(function(){
				$scope.style+=" animate animateView";
				console.log($scope.style);
			},25);
			
		};
	}])
});