define(function(){

	function changeCSS(){
		var pattern =/\w+$/g ;
		var link = document.getElementById("hashchange")
		var hash = location.hash.match(pattern);
		if(hash !== null ){
			hash = hash[0];
			link.href="css/"+hash+".css";
		}else{
			link.href = "css/home.css";
		}
	}


	return{
		css :changeCSS
	}
});