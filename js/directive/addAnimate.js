 

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


 				//将click事件放在此处是为了 阻止冒泡
				$btn.on("click",function(ev){
					ev.stopPropagation();
					$timeout(function(){
						$ele.css("position","fixed");
						scope.changeStyle();
					},25);
				});

				$container.on("click",function(){
					//判断是否处在运动状态
					if($ele.hasClass('animate')){
						
						$ele.removeClass('animate');
						$ele.on("webkitTransitionEnd",transEndEvent);
						$ele.on("transitionEnd",transEndEvent);
					}
					
					
				});

 				function transEndEvent(){
 					$ele.removeClass("animateView");

 					//向全局传播 class消除状态
 					scope.$apply(function(){
						scope.rv =false;
						scope.bh =false;
						scope.th =false;
					});
 					$ele.css("position","relative");
					//每次transitionEnd事件结束后，取消该事件的绑定，避免下一次的End事件被监听
					$ele.off("webkitTransitionEnd");
					$ele.off("transitionEnd");
 				}

 			
 			}
 		}
 	}]);
 });