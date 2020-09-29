$(document).ready(function(){
  // nav menu active js
  $(document).on('click','.menu ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
  });

  // portfolio menu active js
  $(document).on('click','.portfolio-menu ul li',function(){
    $(this).addClass('active').siblings().removeClass('active')
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
// scroll backround change
  $(window).scroll(function(){
  $('.nav-area').toggleClass('scrolled', $(this).scrollTop() > 50);
});

  // mixitup
  var mixer = mixitup('.portfolio');

  // for responsive

$('.nav-area .navbar .menu-icon').click(function(){
    $('.nav-area').toggleClass('bg-nav-area');
  });



$(document).on('click', '.menu ul li a', function (event) {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});





});


