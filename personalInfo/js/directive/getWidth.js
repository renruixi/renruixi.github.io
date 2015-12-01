
//获取图片整体宽度
//
define(["app","jquery"],function(app,$){
	app.directive("getWidth",[function(){
		return {
			restrict : "A",
			link:function(scope,element,attrs){
				var $ele = $(element);
				var $img = $ele.find('img');
				$ele.find(".imgBox").css("width",100 / $img.size()+"%")
				var wrapWidth = $img.size()*100+"%";
				
				scope.width = wrapWidth;
			}
		}
	}])
})