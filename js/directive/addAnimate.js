 

 //定义指令  根据 事件变化的运动类型 添加相应的class
 //
 define(["app","jquery"],function(app,$){
 	app.directive("addAnimate",[function(){
 		return {
 			restrict : "A",
 			link:function(scope,element,attrs){

 				var $ele=$(element),
 					$nav=$ele.find("#homeNav"),
 					$container = $ele.find(".container"),
 					dir,
 					transEndEventNames = {
						'WebkitTransition': 'webkitTransitionEnd',
						'MozTransition': 'transitionend',
						'OTransition': 'oTransitionEnd',
						'msTransition': 'MSTransitionEnd',
						'transition': 'transitionend'
					};

 				scope.$watch("direction",function(changeDir){
 					dir=changeDir;
 					$nav.addClass(dir);
 				});

 				if(!scope.ischanged){
 					$container.on("webkitTransitionEnd",function(){
 						scope.ischanged = true;
 					});
 				}
 				


				$container.on("click",function(){
					if(scope.ischanged){
						element.removeClass('animate');
						$container.on("webkitTransitionEnd",function(){
							element.removeClass('animateView');
							$nav.removeClass(dir);
							scope.ischanged=false;
						});
					}

				});

 				
 			}
 		}
 	}]);
 });