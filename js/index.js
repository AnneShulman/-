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
	
	var ht=$(".branch h4").css("top");
	$(".branch").hover(function(){
			$(this).find("h4").animate({top:0},500);
			$(this).find("p").animate({top:39},500);
		},function(){
			var ht2=$(".branch").css("height");
			$(this).find("h4").animate({top:ht},300);
			$(this).find("p").animate({top:ht2},300);
	});
	// 更改页面大小时触发
	$(window).resize(function(){
   		var height=$(".branch").css("height");
   		if(height=="250px"){
		   	$(".branch h4").css("top",215);
		   	$(".branch p").css("top",250);
		}else if(height=="210px"){
		   	$(".branch h4").css("top",175);
		}else if(height=="170px"){
		    $(".branch h4").css("top",135);
		}else if(height=="120px"){
		    $(".branch h4").css("top",85);
		}
		ht=$(".branch h4").css("top");
	});
})


