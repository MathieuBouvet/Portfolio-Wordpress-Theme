(function($){
	$(function(){
		var l = $('#main').imagesLoaded(function(){
			var masonry = new Masonry("#main", {
				itemSelector: "article.drawings",
				columnWidth: $(".grid-sizer")[0],
				gutter: 0,
			});

			var container = $("#main").infiniteScroll({
				path: ".next.page-numbers",
				append: "article.drawings",
				history: false,
				hideNav: ".navigation.pagination",
				outlayer: masonry,
			});
		});
	});

})(jQuery);