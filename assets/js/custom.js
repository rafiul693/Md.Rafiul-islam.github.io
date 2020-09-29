
$(document).ready(function(){
	// active class add
	$(document).on('click','.menu ul li',function(){
				$(this).addClass('active active-1').siblings().removeClass('active active-1')
			});

	// smooth scroll
	$(document).on('click', '.menu ul li a', function (event) {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
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

	 // Aos js
	 AOS.init({
      offset: 120,
      duration: 800,
    });


	 $('.menu ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});













// animation change text

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


	});