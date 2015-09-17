define(function(){
	function loading(){
		if(document.readyState == "complete"){
			var loading = document.getElementById("loading");
			loading.parentNode.removeChild(loading);
		}
	}


	return {
		loading : loading
	}
})