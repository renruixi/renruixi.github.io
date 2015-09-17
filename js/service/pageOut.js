define(["app","method"],function(app,method){

	app.factory("pageOut",function($timeout){
		function pageOut(id){
			if(document.getElementById(id) !== null){
				var hash,
					ele = document.getElementById(id),
				 	oA = method.getByClass(ele,"pagechange");

				$timeout(function(){
					method.removeClass(ele,"animate");
				},25)
				for(var i=0;i<oA.length;i++){
					method.bind(oA[i],"click",function(){
							hash = this.dataset.hash;
							method.removeClass(ele,"animate");
							method.bind(ele,"transitionend",transitionEndEvent);
							method.bind(ele,"webkitTransitionEnd",transitionEndEvent);

					});
				}
			}else{
				return;
			}

			function transitionEndEvent(){
				window.location.hash = "#/"+hash;
			}	
		}


		return {
			pageOut : pageOut
		}
	});	
});