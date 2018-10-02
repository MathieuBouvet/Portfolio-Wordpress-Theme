(function($){
	$(function(){
		var root = $(":root")[0];
		root.style.setProperty("--menu-height", ($(".navigation-top").outerHeight())+"px");

		var adminBar = $("#wpadminbar");
		if(adminBar.length>0){
			root.style.setProperty("--admin-panel", adminBar.outerHeight()+"px");
		}

		
	});
})(jQuery);