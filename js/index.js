

$(function(){
	$('[data-toggle="popover"]').popover()
	$(".menu-btn").on('click',function(){
		$(".strunk-menu").slideToggle("slow");
	});
})
