
<script>

if ($("#city_selector").length) {
	$("#t_1").css("display","block");
	$("#c-1").addClass("activecity");
	$(".ciudad").bind("click", function() {
		var target=$(this).attr("data-targetid");
		$(".ciudad").removeClass("activecity");
		$(this).addClass("activecity");
		$(".item-list").css("display", "none");
		$("#"+target).css("display","block");
	})
}//selector ciudades

</script>