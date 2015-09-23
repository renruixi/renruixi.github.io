define(["app"],function(app){
	app.factory("proChange",function(){

		function proChange(obj,dir,bool,all){

			if(all){
				for(var prop in obj){
					if(obj.hasOwnProperty(prop)){
						obj[prop] = bool;
					}
				}
			}else{
				for(var prop in obj){
					if(obj.hasOwnProperty(prop)){
						if(prop !== dir){
							obj[prop] = bool;
						}
					}
				}
			}
		}


		return {
			forIn :proChange
		}


	})
})