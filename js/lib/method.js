define(function(){
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


	function getByClass(obj,classname){
		var oEle=obj.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<oEle.length;i++){
			var oClassname=oEle[i].className.split(" ");
			for(var j=0;j<oClassname.length;j++){
				if(oClassname[j]==classname){
					arr.push(oEle[i]);
					break;
				}
			}
		}
		return arr;
	}


	function arrIndexOf(arr,index){
		for(var i=0;i<arr.length;i++){
			if(arr[i] == index){
				return i;
			}
		}
		return -1;
	}
	
	function addClass(obj,classname){
		if(obj.className==""){
			obj.className=classname;
		}else{
			var arrclassName=obj.className.split(" ");
			var classIndex=arrIndexOf(arrclassName,classname)
			if(classIndex==-1){
				obj.className+=" "+classname;
			}
		}
	}


	function removeHandler(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	}
	
	
	function getWheelDelta(event){
		if(event.wheelDelta){
				return  event.wheelDelta
		}else{
			return -event.detail*40
		}
	}


	return {
		bind : bind,
		getByClass : getByClass,
		removeClass : removeClass,
		addClass : addClass,
		removeHandler : removeHandler,
		getWheelDelta : getWheelDelta
	}

	
})