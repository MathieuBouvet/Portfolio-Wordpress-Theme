(function($){
	$(function(){
		$("#main").infiniteScroll({
			path: ".next.page-numbers",
			append: "article.drawings",
			history: false,
			hideNav: ".navigation.pagination",
		});
	})
})(jQuery);