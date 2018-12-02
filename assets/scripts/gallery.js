(function($){
	$(function(){
		var l = $('#main').imagesLoaded(function(){
			var masonry = new Masonry("#main", {
				itemSelector: "article.drawings",
				percentPosition: true,
				columnWidth: ".grid-sizer",
				gutter: ".gutter-sizer",
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