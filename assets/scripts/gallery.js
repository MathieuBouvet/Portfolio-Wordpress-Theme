(function($){
	$(function(){
		$(lastsInColumn()).parent("article").addClass("last-in-column");
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
		/*container.on('load.infiniteScroll', function(event, response){
			let drawings = $(response).find("article.drawings");
			let lastsDrawings = lastsInColumn();
			if(lastsDrawings.length > 0){
				for(let i=0 ; i<drawings.length ; i++){
					$(lastsDrawings[i%lastsDrawings.length]).parent("article").after(drawings[i]);
				}
			}else {
				$("#main").append(drawings);
			}
			
		});*/

	});

	function lastsInColumn(){
		let drawings = $(".diapo-slide");
		let lasts = [];
		if(drawings.length > 0){
			for(let i=0 ; i<drawings.length ; i++){

				$(drawings[i]).removeClass("last-in-column");
				if(drawings[i+1] !== undefined){
					let offset = $(drawings[i]).offset().top;
					let nextOffset = $(drawings[i+1]).offset().top
					if(offset >= nextOffset){
						lasts.push(drawings[i]);
					}
				}else{
					lasts.push(drawings[i]);
				}
			}
		}
		return lasts;
	}
})(jQuery);