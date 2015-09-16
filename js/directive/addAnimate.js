 

 //定义指令  根据 事件变化的运动类型 添加相应的class
 //
 define(["app","jquery"],function(app,$){
 	app.directive("addAnimate",["$timeout",function($timeout){
 		return {
 			restrict : "A",
 			link:function(scope,element,attrs){

 				var $ele=$(element),
 					$nav=$ele.find("#homeNav"),
 					$container = $ele.find(".container"),
 					$btn = $ele.find("button").eq(0);



				$btn.on("click",function(ev){
					ev.stopPropagation();
					$timeout(function(){
						scope.changeStyle();
					},25);
				});

				$container.on("click",function(){
					if($ele.hasClass('animate')){
						$ele.removeClass('animate');
					}
					$ele.on("webkitTransitionEnd",transEndEvent);
					$ele.on("transitionEnd",transEndEvent);
					
				});

 				function transEndEvent(){
 					$ele.removeClass("animateView");
 					scope.$apply(function(){
						scope.rv =false;
						scope.bh =false;
						scope.th =false;
					});
					$ele.off("webkitTransitionEnd");
					$ele.off("transitionEnd");
 				}

 			
 			}
 		}
 	}]);
 });