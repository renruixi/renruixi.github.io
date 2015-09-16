define(["app","jquery"],function(app,$){
	app.provide("draginit",function(){

		var config = {
			length : 8
		};

		$get:function(){
			return {
				drag:function(obj){
					$(this).on("mousedown",function(ev){

						var disX = ev.pageX - $(this).offset().left;

							$(this).on("mousemove",function(ev){
								var ev = ev || event;

								var moveX = ev.pageX - disX;

								if($(this).eq(0) == config.length || $(this).eq(0) == 0){
									moveX = moveX*0.6;	
								}
								$(this).css("left",moveX);
							}.on("mnouseup",function(){
								$(document).off("mousedown mouseup");
								if(moveX > $(this).offsetWidth/(2*config.length)){
									if($(this).eq(0) !== config.length){
										$(this).animate({
											left:-$(this).offsetWidth()
										},1000);
									}
								}
							})
					})

					
				}
			}
		}

	})
});