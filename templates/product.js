<script type="text/javascript" src="[[cdn_domain]]/javascript/slick/slick.min.js"></script>
<script>
	$('#cont-tit-acc').bind("click", function() {
		$("#accionar-prod-desc").toggle();
	})
	
	$('#cont-car-acc').bind("click", function() {
		$("#drop-caracteristicas").toggle();
	})
	$(document).ready( function(){
		var contenido_review=$(".prod_review_score").length;
		if (contenido_review == 0) {
			$(".star-cal").css("display","none");
		}
		
		$('#product_related_content').slick({
			infinite: true,
			 slidesToShow: 2,
			  slidesToScroll: 2,
			  speed: 600,
			  dots: true,
			  centerMode: true,
			  variableWidth: true,
			  adaptiveHeight: true,
			  autoplay: true,
			  arrows:true,
		});
		// Slick slider para productos relacionados
		$('#product_recently_visited_content').slick({
				infinite: true,
				arrows: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 7000,
				lazyLoad: 'ondemand',
				
				responsive: [{
					breakpoint: 600,
					settings: { slidesToShow: 2 }
				}]
		});
		
		if ( ($("#m-alto").length == 1) || ($("#m-acho").length == 1) || ($("#m-largo").length == 1) ) {
			//console.log("hay uno");
		} else {
			//console.log("ninguno");
			$("#medidas").css("display","none");
		}
		/*
		if	($(".gc-thumbs-area").length == 1) {
			if ( $(".gc-thumbs-area").height() > 0 ) {
				$(".wrapper-ribbon-big ").css("margin-left","69px");
			}
		}
		*/
		
	})
</script>