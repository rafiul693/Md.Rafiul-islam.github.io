$(document).ready(function(){

	$(document).on('click','.menu ul li',function(){
		$(this).addClass('active').siblings().removeClass('active')
	});



});