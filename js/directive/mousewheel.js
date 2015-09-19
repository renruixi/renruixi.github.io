define(["app","method"],function(app,method){
	app.directive("mouseWheel",function(){
		return {
			restrict :'A',
			link : function(scope,ele,attr){
				var obj = $(ele).find(".imgBox"),
					startWheel = 0;
					
				
				
				method.bind(document,"mousewheel",function(event){
					event.preventDefault();
					DeltaFn(event);
				});
				
				method.bind(document,"DOMMouseScroll",function(event){
					event.preventDefault();
					DeltaFn(event);
				});
				
				
				for(var i=0;i<obj.length;i++){
					obj[i].index = i;
					method.bind(obj[i],"click",function(){
						
					console.log(scope.finish)
						if(scope.finish){
							for(var i=0;i<obj.length;i++){
								obj[i].style.transform ="translateZ(0) translateX(0) rotateY(0)";
								obj[i].style.webkitTransform ="translateZ(0) translateX(0) rotateY(0)";
								obj[i].style.mozTransform ="translateZ(0) translateX(0) rotateY(0)"; 
							}
							ele.css("transform","translateX("+(-this.index*document.documentElement.clientWidth)+"px)");
							ele.css("webkitTransform","translateX("+(-this.index*document.documentElement.clientWidth)+"px)");
						}
						
					});
				}
				
				
				
				function DeltaFn(event){
					
					var delta = method.getWheelDelta(event);
				
					for(var i=0;i<obj.length;i++){
						obj[i].style.transform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
						obj[i].style.webkitTransform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
						obj[i].style.mozTransform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
					}
					startWheel = startWheel+delta/10;
					
				}
			}
		}
		
	});
})