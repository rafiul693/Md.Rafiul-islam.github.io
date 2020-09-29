$(document).ready(function(){
  // menu icon click show & hide
  $('.menu-icon').click(function(){
    $('.menu ul').slideToggle();
  });

  // search open & close
  $('.top-search').click(function(){
    $('.search-form').slideToggle(500);
    disabledEventPropagation(event);
  });
   $('.search-form').click(function(event){ 
    disabledEventPropagation(event);
  });
  $(document).click(function(event){ 
    $('.search-form').slideUp();
  });



  // owlCarousel
  $(".feedback").owlCarousel({
   responsive:{
      0:{
        items:1
      },
      990:{
        items:2
      }
    }
  });



  // counterup 
  $('.single-project h1').counterUp({
    delay: 5,
    time: 500
  });
});


  // window click hide function
  function disabledEventPropagation(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
  }