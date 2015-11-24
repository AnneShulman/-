var myScroll;

	function loaded () {
		myScroll = new IScroll('#wrapper', 
			{ 
				scrollX: true,
				scrollY: false,
				momentum: false,
				snap: "li",
				snapSpeed: 600,
				keyBindings: true,
				indicators: {
					el: document.getElementById('detail'),
					resize: false,
					listenY: false,
					listenX: true,
					ignoreBoundaries: true
				}
			});
			myScroll.on('scrollEnd',function(){
				$("#history li a").removeClass('active');
				$("#history li a").eq(myScroll.currentPage.pageX).addClass('active');
			});
	}
	
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

	function pC(index) {
		if(index > myScroll.currentPage.pageX) {
			myScroll.next();
		}else if(index < myScroll.currentPage.pageX) {
			myScroll.prev();
		}
	}

$(function(){
	loaded ();
	$('[data-toggle="popover"]').popover();
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
