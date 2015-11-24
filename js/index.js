

$(function(){
	loaded ();
	$('[data-toggle="popover"]').popover()
	$(".menu-btn").on('click',function(){
		$(".strunk-menu").slideToggle("slow");
	});
	$(".branch").hover(function(){
			$(this).find("h4").animate({bottom:215},500);
			$(this).find("p").animate({top:35},500);
		},function(){
			$(this).find("h4").animate({bottom:0},300);
			$(this).find("p").animate({top:250},300);
	});
})
