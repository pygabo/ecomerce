<script>
	$('#comprar_por_categoria').slick({
		infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  speed: 600,
		  dots: true,
		  centerMode: true,
		  variableWidth: true,
		  adaptiveHeight: true,
		  autoplay: true,
		  arrows:true,
	});
	
	$(document).ready(function(){
		$(".slick_cat a").bind({
			mouseover: function(){
				var targ=$(this).attr("data-target");
				console.log(targ+" #slick_img_"+targ);
				$("#slick_img_"+targ).addClass("brightness50");
			},
			mouseleave: function() {
				var targ=$(this).attr("data-target");
				$("#slick_img_"+targ).removeClass("brightness50");
			}
		})
		
		//REMOVER TITULOS DE GRUPOS EN HOMEPAGE
		var tpl_titulo_arr=[];
		var product_carousel_arr=[];
		var prod_resp_arr=[];
		var prod_tabla_arr=[];
		//recorrer pr_slides, pr_responsive, pr_tabla
		if ($(".pr_slides").length) {
			$(".pr_slides").each(function(){
//console.log("product_carousel existe "+$(this).find('.product-carousel').find('.product-carousel-item').length);
				if ($(this).find('.product-carousel').find('.product-carousel-item').length > 0) {
					product_carousel_arr.push($(this).attr("data-group"));
				}
			})	
		}
		if ($(".pr_resp").length) {
			$(".pr_resp").each(function(){
//console.log("pr_resp container_div existe "+$(this).find('.container_div').find('.dpr_container').length);
				if ($(this).find('.container_div').find('.dpr_container').length > 0) {
					//mayor a 0 existe
				 prod_resp_arr.push($(this).attr("data-group"));
				}
			})	
		}
		if ($(".pr_tabla").length) {
			$(".pr_tabla").each(function(){
				if ($(this).find('.container_table').find('.listname').length > 0) {
					prod_tabla_arr.push($(this).attr("data-group"));
				}
			})	
		}
		$("div").each( function() {
			if ($(this).attr("id") == 'tpl_titulo') {
				var data_group=$(this).attr("data-group");
				//mirar que n o este en ningun array y borrar
				var borrar_resp=0;
				var borrar_tabla=0;
				var borrar_slides=0;
//console.log('data group '+data_group);
//console.log('carosuel length '+product_carousel_arr.length );
				if (product_carousel_arr.length >= 1) {
//console.log('indexof '+$.inArray(data_group, product_carousel_arr) );
					if ($.inArray(data_group,product_carousel_arr) < 0) {
						borrar_slides=1;
					}
				} else {
					borrar_slides=1;
				}
//console.log('borrar slides '+borrar_slides);
//console.log('responsive length '+prod_resp_arr.length);
				if (prod_resp_arr.length >= 1) {
//console.log('indexof '+$.inArray(data_group, prod_resp_arr));

					if ($.inArray(data_group, prod_resp_arr) < 0) {
						borrar_resp=1;
					}
				} else {
					borrar_resp=1;
				}
//console.log('borrar_resp '+borrar_resp);
//console.log('tabla length '+prod_tabla_arr.length);
				if (prod_tabla_arr.length >= 1) {
//console.log('indexof '+$.inArray(data_group, prod_tabla_arr));
					if ($.inArray(data_group, prod_tabla_arr) < 0) {
						borrar_tabla=1;
					}
				} else {
					borrar_tabla=1;
				}
//console.log('borrar_tabla '+borrar_tabla);
//console.log(borrar_slides+' && '+borrar_resp+' && '+borrar_tabla);
				if (borrar_slides && borrar_resp && borrar_tabla  ) {
					tpl_titulo_arr.push(data_group);
//console.log("borrar "+data_group);	
						$(this).css("display","none");
				}
			}
		})
		//console.log(tpl_titulo_arr);
		//console.log('carrousel '+product_carousel_arr);
		//console.log('responsive ');
		//console.log(prod_resp_arr);
		//console.log('tabla '+prod_tabla_arr);
		//*****REMOVER TITULOS DE GRUPOS EN HOMEPAGE
		
		
	})//doc ready
	
</script>
