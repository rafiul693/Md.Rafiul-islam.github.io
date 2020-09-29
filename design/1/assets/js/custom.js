$(document).ready(function(){
	// menu icon
	$('.menu-icon').click(function(event){
		$('.menu ul').slideToggle(500);
	});
	// menu active js
	$(document).on('click','.portfolio-menu ul li',function(){
		$(this).addClass('active-1').siblings().removeClass('active-1')
	});
	// search area js
	$('.serach-icon').click(function(){
		$('.search-form').slideToggle();
	});

	// portfolio-menu active js
	$(document).on('click','.menu ul li',function(){
		$(this).addClass('active').siblings().removeClass('active')
	});

	// mix it up
	var mixer = mixitup('.gellary');





});