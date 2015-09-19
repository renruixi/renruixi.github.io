define(["app","method"],function(app,method){
	app.service("draginit",function(){
		
		
		
		function Draginit(ele,child){
			this.init(ele,child);
		}

		Draginit.prototype.init=function(ele,child){

			this.ele = document.getElementById(ele);
			this.child = method.getByClass(this.ele,child)[0];
			
			this.finish = false;

		};

		Draginit.prototype.drag=function(callback){

			var self = this;
			var iNow = 0;
			var moveX=0;
			var startX=0;
			var iX = 0;
			
			
			var iWidth = document.documentElement.clientWidth;

			method.bind(self.ele,"mousedown",function(ev){

				var ev = ev || window.event;
				self.ele.style.transition="none";
				ev.preventDefault();
				var downX = ev.clientX;
				startX = iX;

				document.onmousemove=function(ev){

					var ev = ev ||window.event;
					ev.preventDefault();

					moveX = ev.clientX-downX;
					if(iNow == 0 && moveX>0 || iNow == self.child.length -1 && moveX < 0 ){
						moveX = moveX/4;
					}
					iX = startX+moveX;
					self.ele.style.WebkitTransform=self.ele.style.transform="translateX("+iX+"px)";
				
				};

				document.onmouseup=function(ev){
					
					var ev = ev ||window.event;
					iNow=-Math.round(iX/iWidth);
					if(iNow<0){
						iNow=0;
					}else if(iNow>self.child.length-1){
						iNow=self.child.length-1;
					}
					document.onmousemove = null;
					document.onmouseup = null;
					self.ele.style.transition="0.3s";
					iX=-iNow*iWidth;
					self.ele.style.WebkitTransform=self.ele.style.transform="translateX("+iX+"px)";
					
					self.finish = true;
					
					callback(self.finish);
				}

				
				self.ele.setCapture && self.ele.setCapture();
			});
		};


		return {
			Draginit : Draginit
		}

	});

});

		