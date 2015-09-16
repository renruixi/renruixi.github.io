//homeCtrl

define(["app","getRandom"],function(app,getRandom){
	return app.controller("homeCtrl",['$scope',"$timeout","getRandom",function($scope,$timeout,getRandom){
		
		//定义运动类型数组
		//
		$scope.default = true;
		$scope.animateStyle = ["rotateLeft","moveDown","rotateTop","layDown"];
		
		//点击事件使得每次随机获取运动类型
		$scope.changeStyle = function(ev){
			
			var length = $scope.animateStyle.length;

			$scope.style = $scope.animateStyle[getRandom.random(length-1)];

			$scope.animate = true;
			
			switch($scope.style){
				case "rotateLeft":
						$scope.rv = true;
						break;
				case "rotateTop":
						$scope.bh = true;
						break;
				case "layDown":
				case "moveDown":
						$scope.th = true;
						break;
			}
			
			$timeout(function(){
				$scope.style += " animate animateView";
			},180);
							
		};
	}])
});