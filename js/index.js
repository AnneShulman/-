

$(function(){
	loaded ();
	$('[data-toggle="popover"]').popover()
	$(".menu-btn").on('click',function(){
		$(".strunk-menu").slideToggle("slow");
	});
	var ht;
	$(".branch").hover(function(){
			ht=$(".branch h4").css("top");
			$(this).find("h4").animate({top:0},500);
			$(this).find("p").animate({top:39},500);
		},function(){
			var ht2=$(".branch").css("height");
			$(this).find("h4").animate({top:ht},300);
			$(this).find("p").animate({top:ht2},300);
	});
})
