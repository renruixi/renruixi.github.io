define(function(){
	function loading(){
		if(document.getElementById("loading") !== null){
			if(document.readyState == "complete"){
				var loading = document.getElementById("loading");
				loading.parentNode.removeChild(loading);
			}
		}
	}


	return {
		loading : loading
	}
})