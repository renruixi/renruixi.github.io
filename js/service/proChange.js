define(["app"],function(app){
	app.factory("proChange",function(){

		function proChange(obj,dir){

			for(var prop in obj){
				if(obj.hasOwnProperty(prop)){
					if(prop !== dir){
						obj[prop] = true;
					}
				}
			}
		}


		return {
			forIn :proChange
		}


	})
})