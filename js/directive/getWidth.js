
//获取图片整体宽度
//
define(["app","jquery"],function(app,$){
	app.directive("getWidth",function(){
		return {
			restrict : "A",
			link : function(scope,element,attrs){
				var $ele = $(element);
				var wrapWidth = $ele.find('img').size()*100+"%";
				
				scope.$apply(function(){
					scope.width = wrapWidth;
				});
			}
		}
	});
});