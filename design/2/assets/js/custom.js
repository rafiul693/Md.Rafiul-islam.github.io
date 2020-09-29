
$(document).ready(function(){

	$('.menu-icon i').click(function(){
		$('.menu ul').slideToggle(1000);
	});
	
	// active class add
	$(document).on('click','.menu ul li',function(){
				$(this).addClass('active active-1').siblings().removeClass('active active-1')
			});


	// search area
	$('.search-area a i').click(function(event){
		$('.search-form').slideToggle();
		disabledEventPropagation(event);
	});

	$('.search-form').click(function(event){ 
		disabledEventPropagation(event);
	});
	$(document).click(function(event){ 
		$('.search-form').slideUp();
	});


	function disabledEventPropagation(event) {
	  if (event.stopPropagation) {
	    event.stopPropagation();
	  } else if (window.event) {
	    window.event.cancelBubble = true;
	  }
	}
	// Counter UP
	$('.project-area h1').counterUp({
	    delay: 10,
	    time: 1000
	});
	// client carousel
	 $(".client-carousel").owlCarousel({
	 	responsive:{
	 		0:{
	 			items:2
	 		},
	 		767:{
	 			items:3
	 		},
	 		990:{
	 			items:4
	 		}
	 	}
	 });

	 // menu js
	});