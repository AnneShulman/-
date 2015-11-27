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
	var ht2=$(".branch").css("height");
	var isfirst = [];
	for(var i = 0;i < 10; i++)
		isfirst[i] = true;
	function slideUp(branch) {
//		console.log('1');
		branch.find("h4").animate({top:0},500);
		branch.find("p").animate({top:0},500);
//		branch.unbind('mouseenter');
	}
//	function slideDown(branch) {
//		branch.find("h4").animate({top:ht},500);
//		branch.find("p").animate({top:ht2},500);
//	}
//	$(".branch").hover(function(){
//			$_this = $(this);
//			if(!$($_this).find("p").is(":animated"))
//				slideUp($_this);
//			console.log($($_this).find("p").is(":animated"))
//		},function(){
//			var $_this = $(this);
//			if($($_this).find("p").is(":animated"))
//				slideDown($_this);
//	});
	// 更改页面大小时触发
//	$(window).resize(function(){
// 		var height=$(".branch").css("height");
// 		if(height=="250px"){
//		   	$(".branch h4").css("top",215);
//		   	$(".branch p").css("top",250);
//		}else if(height=="210px"){
//		   	$(".branch h4").css("top",175);
//		   	$(".branch p").css("top",210);
//		}else if(height=="170px"){
//		    $(".branch h4").css("top",135);
//		    $(".branch p").css("top",170);
//		}else if(height=="120px"){
//		    $(".branch h4").css("top",85);
//		    $(".branch p").css("top",120);
//		}
//		ht=$(".branch h4").css("top");
//		ht2=$(".branch").css("height");
//	});
})


