define(function(){

	function hashchange(target,moveEle){
		if(document.getElementById(target) !== null){
			var hash,
			 	oA = document.getElementById(target).getElementsByTagName("a"),
				ele = document.getElementById(moveEle);
			for(var i=0;i<oA.length;i++){
				bind(oA[i],"click",function(){
						hash = this.dataset.hash;
						removeClass(ele,"animate");
						bind(ele,"transitionend",transitionEndEvent);
						bind(ele,"webkitTransitionEnd",transitionEndEvent);

				});
			}
		}else{
			return;
		}

		function transitionEndEvent(){
			window.location.hash = "#/"+hash;
		}

		function bind(element,type,handler){
			if(element.addEventListener){
				element.addEventListener(type,handler,false);
			}else if(element.attachEvent){
				element.attachEvent('on'+type,handler);
			}else{
				element['on'+type]=handler;
			}
		}

		function removeClass(obj, sClass) { 
		    var aClass = obj.className.split(' ');
		    if (!obj.className) return;
		    for (var i = 0; i < aClass.length; i++) {
		        if (aClass[i] === sClass) {
		            aClass.splice(i, 1);
		            obj.className = aClass.join(' ');
		            break;
		        }
		    }
		}
	}





	

	

	return {
		hashchange : hashchange
	}
});