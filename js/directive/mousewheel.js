define(["app","method"],function(app,method){
	app.directive("mouseWheel",function($timeout){
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
				
					
				
				function DeltaFn(event){
					
					var delta = method.getWheelDelta(event);
					
					if(startWheel+delta/10 !== 0){
						for(var i=0;i<obj.length;i++){
							obj[i].style.transform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
							obj[i].style.webkitTransform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
							obj[i].style.mozTransform ="translateZ(-1800px) translateX(-50%) rotateY("+(startWheel+delta/10)+"deg)";
						}
						startWheel = startWheel+delta/10;
					}else{
						for(var i=0;i<obj.length;i++){
							obj[i].style.transform ="translateZ(0) translateX(0) rotateY(0deg)";
							obj[i].style.webkitTransform ="translateZ(0) translateX(0) rotateY(0deg)";
							obj[i].style.mozTransform ="translateZ(0) translateX(0) rotateY(0deg)";
							
							
						}
					}
						
					
					
					
				}
			}
		}
		
	});
})