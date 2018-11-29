(function($){
	$(function(){
		$(lastsInColumn()).parent("article").addClass("last-in-column");

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
					if(offset > nextOffset){
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