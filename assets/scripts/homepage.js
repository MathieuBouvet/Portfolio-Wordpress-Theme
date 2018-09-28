(function($){
	$(function(){
		var root = $(":root")[0];
		root.style.setProperty("--menu-height", ($(".navigation-top").height()+2)+"px");

		$(".diapo-slide").click(function(event){
			var width = $(this).width();
			$(this).addClass("fixed");
			$(this).width(width+"px");
		});

	});
})(jQuery);